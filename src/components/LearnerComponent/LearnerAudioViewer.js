import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Check from "@mui/icons-material/Check";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
//import { useDispatch, useSelector } from "react-redux";

const Audio = styled.video`
  flex-shrink: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ElapsedTimeTracker = ({ elapsedSec, totalSec }) => {
  const elapsedMin = Math.floor(elapsedSec / 60);
  const elapsedSecond = Math.floor(elapsedSec % 60);

  return (
    <Flex align="center" fontWeight="600" gap="4px">
      <Text fontWeight={600} color="white">
        {elapsedMin}:
      </Text>
      <Text fontWeight={600} color="white">
        {elapsedSecond.toString().padStart(2, "0")}
      </Text>
      <Text fontWeight={600} color="white">
        / {Math.floor(totalSec / 60)}:
        {Math.floor(totalSec % 60).toString().padStart(2, "0")}
      </Text>
    </Flex>
  );
};

const PlaybackRateControlButton = React.forwardRef(
  ({ onClick, playbackRate }, ref) => (
    <div ref={ref}>
      <Flex
        alignItems="center"
        cursor="pointer"
        h="40px"
        justifyContent="center"
        rounded="12px"
        w="45px"
        _hover={{
          bg: "rgba(255, 255, 255, 0.08)",
        }}
        onClick={onClick}
        transition="500ms opacity"
      >
        <Text
          color="white"
          fontWeight={700}
          letterSpacing="0.5px"
          pos="relative"
          top="-1px"
        >
          <span style={{ fontSize: "14px" }}>{playbackRate}</span>
          <span style={{ fontSize: "11px" }}>x</span>
          <ExpandMore
            bottom="-1px"
            color="white"
            marginLeft="-1px"
            marginRight="-4px"
            opacity="0.5"
            pos="relative"
            width="12px"
            stroke="white"
          />
        </Text>
      </Flex>
    </div>
  )
);

const PlaybackRateControl = React.memo(function PlaybackRateControl({
  playbackRate,
  setPlaybackRate,
}) {
  return (
    <Menu autoSelect={false} placement="top-start">
      <MenuButton as={PlaybackRateControlButton} playbackRate={playbackRate} />
      <MenuList
        bg="#1D253F"
        border="none"
        pl="8px"
        pr="8px"
        minW="50px"
        zIndex="2"
      >
        <MenuGroup
          color="white"
          fontSize="12px"
          fontWeight="400"
          ml="9px"
          title="Playback Speed"
        >
          {[0.5, 1, 1.5, 2].map((rate) => (
            <MenuItem
              height="40px"
              justifyContent="space-between"
              key={`playbackRate_${rate}`}
              onClick={() => {
                if (playbackRate === rate) return;
                setPlaybackRate(rate);
              }}
              _hover={{
                bg: "rgba(0, 0, 0, 0.4)",
              }}
              _focus={{
                bg: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <Text fontWeight={600} size="sm" color="white">
                {rate.toFixed(1)}x
              </Text>
              {playbackRate === rate && (
                <Check width="15px" height="11px" fill="white" />
              )}
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});

const LearnerAudioViewer = ({ material }) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [src, setSrc] = useState(material);
  const [transcript, setTranscript] = useState("");
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const bufferRef = useRef(null);
  const containerRef = useRef(null);
  const recognition = useRef(null);

  const initSpeechRecognition = () => {
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.onresult = (event) => {
      const newTranscript = event.results[0][0].transcript;
      console.log('Speech recognition result:', newTranscript);
      setTranscript(newTranscript);
    };
    recognition.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
    recognition.current.start();
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      initSpeechRecognition();
    } else {
      console.error('Speech recognition not supported in this browser');
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
        recognition.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const onProgress = () => {
      if (!videoRef.current || !videoRef.current.buffered || !bufferRef.current) return;
      if (!videoRef.current.buffered.length) return;
      const bufferedEnd = videoRef.current.buffered.end(
        videoRef.current.buffered.length - 1
      );
      const duration = videoRef.current.duration;
      if (bufferRef && duration > 0) {
        bufferRef.current.style.width = (bufferedEnd / duration) * 100 + "%";
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      if (!videoRef.current || !videoRef.current.buffered || !progressRef.current) return;
      const duration = videoRef.current.duration;
      setDurationSec(duration);
      setElapsedSec(videoRef.current.currentTime);
      if (progressRef && duration > 0) {
        progressRef.current.style.width =
          (videoRef.current.currentTime / duration) * 100 + "%";
      }
    };

    videoRef.current.addEventListener("progress", onProgress);
    videoRef.current.addEventListener("timeupdate", onTimeUpdate);
    videoRef.current.addEventListener("waiting", onWaiting);
    videoRef.current.addEventListener("play", onPlay);
    videoRef.current.addEventListener("playing", onPlay);
    videoRef.current.addEventListener("pause", onPause);

    return () => {
      if (!videoRef.current) return;
      videoRef.current.removeEventListener("progress", onProgress);
      videoRef.current.removeEventListener("timeupdate", onTimeUpdate);
      videoRef.current.removeEventListener("waiting", onWaiting);
      videoRef.current.removeEventListener("play", onPlay);
      videoRef.current.removeEventListener("playing", onPlay);
      videoRef.current.removeEventListener("pause", onPause);
    };
  }, [isPlaying, isWaiting]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current.playbackRate === playbackRate) return;
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const seekToPosition = (pos) => {
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;
    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };

  const handleFullscreenClick = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <Flex
      direction="column"
      h="100%"
      maxH="10%"
      maxW="100%"
      minH="10%"
      position="relative"
      ref={containerRef}
      w="100%"
    >
      <Audio
        ref={videoRef}
        src={src}
        onCanPlay={() => setIsWaiting(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsWaiting(true)}
        autoPlay={false}
        controls={false}
      />
      <Flex
        direction="column"
        justify="space-between"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        p="8px"
        zIndex="1"
        bg="rgba(0, 0, 0, 0.5)"
      >
        <Flex justify="space-between" align="center">
          <Button
            onClick={handlePlayPauseClick}
            colorScheme="transparent"
            color="white"
            size="sm"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
          >
            {isPlaying ? (
              <PauseIcon style={{ fontSize: "32px" }} />
            ) : (
              <PlayArrowIcon style={{ fontSize: "32px" }} />
            )}
          </Button>
          <PlaybackRateControl
            playbackRate={playbackRate}
            setPlaybackRate={setPlaybackRate}
          />
          <Button
            onClick={handleFullscreenClick}
            colorScheme="transparent"
            color="white"
            size="sm"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
          >
            {isFullscreen ? (
              <FullscreenExitIcon style={{ fontSize: "32px" }} />
            ) : (
              <FullscreenIcon style={{ fontSize: "32px" }} />
            )}
          </Button>
        </Flex>
        <Flex direction="column" align="center">
          {isWaiting && <Spinner size="sm" />}
          <Flex
            align="center"
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="10px"
            h="8px"
            position="relative"
            w="100%"
            onClick={(e) => {
              const rect = e.target.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              seekToPosition(pos);
            }}
            cursor="pointer"
          >
            <Box
              ref={bufferRef}
              bg="rgba(255, 255, 255, 0.5)"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              borderRadius="inherit"
              transition="width 0.2s"
              zIndex="1"
            />
            <Box
              ref={progressRef}
              bg="white"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              borderRadius="inherit"
              transition="width 0.2s"
              zIndex="2"
            />
          </Flex>
          <ElapsedTimeTracker elapsedSec={elapsedSec} totalSec={durationSec} />
        </Flex>
      </Flex>
      <Box
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        p="5px 10px"
        borderRadius="5px"
        fontSize="14px"
      >
        {transcript}
      </Box>
    </Flex>
  );
};

export default LearnerAudioViewer;


