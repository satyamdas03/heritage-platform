'use client';
import React, { useState } from 'react'; // Simple local state for demo
import Link from 'next/link';

// Mock initial cart data for demo purposes since we don't have a global cart context yet
const INITIAL_CART = [
    {
        id: '1',
        title: 'Bankura Horse Pair',
        artisan: 'Manik Lal',
        price: 1250,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXhhrYAVYt5CoLnx0lX2IbWPg6aPQR65cLCq1vzTj47-t-ylUncG3anRQTZJvXstjTSMNUCIMqJygMvprOc_jIsDelXJqwjtucfeNqoMQTyHquA8ZIPzyW6tCbYOxXcgNR2PtMyDK30W3TC1hBf3uXylG0Sog5UdHtlZ6Z1Oq9Yy2BZ-gM2ba0knehjrmrpto-J320c9Gg_7gg_iCZ2AmTVCcWbBXqDxmQEuOEwPLHa-IQ9bGazC-i4Us2PDL-ZwesWD0qG0gRw0',
        quantity: 1
    },
    {
        id: '2',
        title: 'Hand-Stitched Kantha Stole',
        artisan: 'Rina Begum',
        price: 3400,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV_vQ2NqZ_uXQdZ5yM5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_K5g8xZ_', // Placeholder if broken
        quantity: 2
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);
    const [loading, setLoading] = useState(false);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 150;
    const total = subtotal + shipping;

    const updateQuantity = (id: string, change: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        title: item.title,
                        price: item.price,
                        quantity: item.quantity,
                        imageUrl: item.image
                    })),
                    type: 'cart'
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Checkout failed:', data);
                alert(`Checkout failed: ${data.error || 'Unknown error'}`);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert('An error occurred during checkout.');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#f6f6f8] dark:bg-[#101022]">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">shopping_cart_off</span>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h1>
                <Link href="/marketplace" className="text-[#1313ec] font-bold hover:underline">Start Shopping</Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101022] p-4 md:p-8 font-sans text-slate-900 dark:text-white">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-3xl font-black mb-8">Shopping Bag</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 py-4 border-b border-slate-100 dark:border-slate-700 last:border-0">
                                    <div className="size-24 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://dummyimage.com/100x100/ccc/fff&text=Product'} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">By {item.artisan}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded-lg">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-slate-50 dark:hover:bg-slate-700">-</button>
                                                <span className="px-2 text-sm font-bold">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-slate-50 dark:hover:bg-slate-700">+</button>
                                            </div>
                                            <span className="font-bold text-lg">₹{item.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="w-full lg:w-80">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
                            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                            <div className="flex flex-col gap-3 text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Subtotal</span>
                                    <span>₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Shipping</span>
                                    <span>₹{shipping}</span>
                                </div>
                            </div>
                            <div className="flex justify-between font-bold text-lg mb-6">
                                <span>Total</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={loading}
                                className="w-full bg-[#1313ec] hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-wait"
                            >
                                {loading ? 'Processing...' : (
                                    <>
                                        <span>Proceed to Checkout</span>
                                        <span className="material-symbols-outlined text-sm">lock</span>
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Secure transaction via Stripe
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
