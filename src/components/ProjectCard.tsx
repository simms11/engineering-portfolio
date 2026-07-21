'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
    name: string;
    description: string;
    html_url: string;
    language: string;
    demoUrl?: string;
}

export default function ProjectCard({ name, description, html_url, language, demoUrl }: ProjectCardProps) {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isIframeLoading, setIsIframeLoading] = useState(true);

    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleId = `demo-title-${name}`;

    const closeDemo = () => setIsDemoOpen(false);

    useEffect(() => {
        if (!isDemoOpen) return;

        setIsIframeLoading(true);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeDemo();
                return;
            }

            if (event.key !== 'Tab' || !dialogRef.current) return;

            const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])'
            );
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            triggerRef.current?.focus();
        };
    }, [isDemoOpen]);

    return (
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-600 hover:underline mb-2 break-words">
                    <a href={html_url} target="_blank" rel="noreferrer" title={name}>
                        {name}
                    </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description || "No description provided."}
                </p>
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                {language && (
                    <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1.5 rounded">
                        ● {language}
                    </span>
                )}

                {demoUrl && (
                    <button
                        ref={triggerRef}
                        type="button"
                        onClick={() => setIsDemoOpen(true)}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                            <path d="M10 3a1 1 0 000 2h3.586l-9.293 9.293a1 1 0 101.414 1.414L15 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                        </svg>
                        Live Demo
                    </button>
                )}
            </div>

            {isDemoOpen && demoUrl && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    ref={dialogRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-0 sm:p-4"
                    onClick={closeDemo}
                >
                    <div
                        className="bg-white rounded-none sm:rounded-xl shadow-xl w-full h-full sm:h-[85vh] sm:max-w-5xl flex flex-col overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
                            <span id={titleId} className="min-w-0 truncate text-sm font-semibold text-gray-700">
                                {name} — Live Demo
                            </span>
                            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hidden sm:inline text-xs text-blue-600 hover:underline whitespace-nowrap px-2 py-2 -my-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                >
                                    Open in new tab
                                </a>
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Open demo in new tab"
                                    className="sm:hidden p-2 -m-1 text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                >
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                        <path d="M10 3a1 1 0 000 2h3.586l-9.293 9.293a1 1 0 101.414 1.414L15 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                                    </svg>
                                </a>
                                <button
                                    ref={closeRef}
                                    type="button"
                                    onClick={closeDemo}
                                    aria-label="Close demo"
                                    className="p-2 -m-1 text-gray-500 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                >
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex-1">
                            {isIframeLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white text-sm text-gray-500 gap-2 px-6 text-center">
                                    <svg className="w-4 h-4 animate-spin text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                    </svg>
                                    Spinning up the live demo — this can take a few seconds if it's been idle.
                                </div>
                            )}
                            <iframe
                                src={demoUrl}
                                title={`${name} live demo`}
                                className="w-full h-full"
                                onLoad={() => setIsIframeLoading(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
