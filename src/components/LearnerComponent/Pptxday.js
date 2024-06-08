import { useEffect, useRef } from 'react';
 
export default function PptViewerComponent(props) {
    const containerRef = useRef(null);
 
    useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit;
        (async function () {
            PSPDFKit = await import('pspdfkit');
            PSPDFKit.unload(container);
 
            instance = await PSPDFKit.load({
                // Container where PSPDFKit should be mounted.
                container,
                // The document to open.
                document: props.Document,
                // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
                baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
            });
        })();
 
        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);
 
    return (
        <div
            ref={containerRef}
            style={{ width: '83vw', height: '90vh', marginLeft:10, marginTop:10 }}
        />
    );
}