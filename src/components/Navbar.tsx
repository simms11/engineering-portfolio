"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'CV', href: '/cv' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
                    Alsahid<span className="text-blue-600">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                pathname === link.href ? 'text-blue-600' : 'text-gray-500'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base font-medium ${
                                pathname === link.href ? 'text-blue-600' : 'text-gray-600'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}