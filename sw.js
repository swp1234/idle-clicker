/**
 * Service Worker for Idle Clicker Game
 * Enables offline functionality with caching and improved performance
 */

const CACHE_NAME = 'idle-clicker-v5';
const APP_PATH = '/idle-clicker/';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './assets/dungeon-bg-opt.jpg',
    './js/i18n.js',
    './js/app.js',
    './js/game-data.js',
    './js/monster-art-ext.js',
    './js/monster-art-ext2.js',
    './js/sound-engine.js',
    './js/dopamine-effects.js',
    './js/locales/ko.json',
    './js/locales/en.json',
    './js/locales/zh.json',
    './js/locales/hi.json',
    './js/locales/ru.json',
    './js/locales/ja.json',
    './js/locales/es.json',
    './js/locales/pt.json',
    './js/locales/id.json',
    './js/locales/tr.json',
    './js/locales/de.json',
    './js/locales/fr.json',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch((error) => {
                console.warn('Cache addAll failed:', error);
                // Continue even if some assets fail to cache
            });
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name.startsWith('idle-clicker-') && name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin || !url.pathname.startsWith(APP_PATH)) return;

    event.respondWith(
        fetch(event.request).then((response) => {
            if (response.ok) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
            }
            return response;
        }).catch(() => {
            return caches.match(event.request).then((cached) => {
                return cached || caches.match('./index.html');
            });
        })
    );
});
