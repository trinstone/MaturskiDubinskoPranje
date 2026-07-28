import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Šalje page_view događaj Google Analytics-u pri svakoj promeni rute
// (React Router menja stranicu bez punog osvežavanja, pa GA to inače ne bi video).
const AnalyticsTracker = () => {
    const lokacija = useLocation();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path: lokacija.pathname + lokacija.search,
            });
        }
    }, [lokacija]);

    return null;
};

export default AnalyticsTracker;
