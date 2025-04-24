'use client';
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from "@/app/components/Header";
import "./popUpStyle.css";

mapboxgl.accessToken = 'pk.eyJ1IjoicmFhbHFhcm5pIiwiYSI6ImNtOXRzMmNmMDAyNzAyanNibWZsbzcwNWEifQ.HvxhdVloa1Z_JAoArfuU2A';

export default function Page() {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [46.6753, 24.7136],
            zoom: 10.5,
        });

        const coords: [number, number][] = [
            [46.7314, 24.658],
            [46.8021, 24.7131],
            [46.6753, 24.7136],
            [46.7931, 24.6443],
        ];

        coords.forEach((coord) => {
            const popup = new mapboxgl.Popup({
                offset: 55,
                closeButton: false,
                className: "apple-popup",
            }).setHTML(`
                <div class="w-[322px] h-[156px] bg-white rounded shadow-md p-4 flex items-center gap-4">
                    <div class="flex-shrink-0">
                        <img src="/Cheko-logo.svg" alt="Cheko-logo" class="w-[137px] h-[138px]" />
                    </div>
                    <div class="flex flex-col flex-grow items-start justify-between gap-8">
                        <h3 class="text-black text-lg">Cheko</h3>
                        <div class="flex items-center justify-between w-full gap-4">
                            <p class="text-sm text-[#757575] whitespace-nowrap">Menu list</p>
                            <button id="go-home-btn" class="popup-button w-[33px] h-[33px] bg-[#F4CBDF] text-black rounded-md flex items-center justify-center cursor-pointer">
                                <img src="/chevron-right.svg" alt="chevron-right" class="w-[9px] h-[16px]" />
                            </button>
                        </div>
                    </div>
                </div>
            `);

            new mapboxgl.Marker({ color: 'black' })
                .setLngLat(coord)
                .setPopup(popup)
                .addTo(map);

            popup.on('open', () => {
                const btn = document.getElementById('go-home-btn');
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        console.log('Going home...');
                        window.location.href = '/';
                    });
                }
            });
        });

        return () => map.remove();
    }, []);

    const handleFilter = (filterCriteria: string) => {
        console.log('Filter applied:', filterCriteria);
    };

    const handleSearch = (searchQuery: string) => {
        console.log('Searching for:', searchQuery);
    };

    return (
        <div>
            <Header filterList={[]} onFilter={handleFilter} onSearch={handleSearch} />
            <div style={{ width: '100%', height: '100vh' }}>
                <div id="map" style={{ width: '100%', height: '100%' }}></div>
            </div>
        </div>
    );
}
