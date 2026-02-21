'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { getProductsAction } from '@/app/actions/product.actions';


export default function HelpPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [numProducts, setNumProducts] = useState(0);

    useEffect(()=>{
        async function fetch() {
            const list = await getProductsAction();
            setNumProducts(list.length);
        };
        fetch();
    },[]);

    const faqs = [
        {
            question: "Как мога да преглеждам произведенията?",
            answer: "Всички произведения са достъпни в нашата галерия."
        },
        {
            question: "Как да поръчам произведение?",
            answer: "Изберете желаното произведение, попълнете формата за поръчка и ние ще се свържем с вас."
        },
        {
            question: "Какво е времето на доставка?",
            answer: "Обичайно време на доставка е 3-4 работни дни, в зависимост от сложността и вида на поръчката."
        },
        {
            question: "Мога ли да заявя персонализирано произведение?",
            answer: "Да! Свържете се с нас чрез формата за контакт или имейл с подробно описание на вашата идея."
        },
        {
            question: "Как функционира връщането?",
            answer: "Ако сте недоволни, можете да върнете произведението в оригинално състояние в течение на 14 дни за пълно възтановяване."
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Помощ и поддръжка</h1>
                    <p className="text-lg text-slate-600">Всичко, което трябва да знаете за Alina Art</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

                {/* Quick Links */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
                    <a href="#faq" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
                        <div className="text-2xl mb-2">❓</div>
                        <h3 className="font-semibold text-slate-900">FAQ</h3>
                        <p className="text-sm text-slate-600">Често задавани въпроси</p>
                    </a>
                    <a href="#contact" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-blue-500">
                        <div className="text-2xl mb-2">📧</div>
                        <h3 className="font-semibold text-slate-900">Контакт</h3>
                        <p className="text-sm text-slate-600">Свържете се с нас</p>
                    </a>
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Често задавани въпроси</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50"
                                >
                                    <span className="font-semibold text-slate-900 text-left">{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 text-slate-700">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section className="mb-12 bg-white rounded-lg shadow p-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">За Alina Art</h2>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                        Alina Art създава персонално изработени художествени произведения, комбинирайки талант, съвременни технологии и висококачествени материали. Всяка творба е уникална, създадена по поръчка и с внимание към всеки детайл.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-1">{numProducts}</div>
                            <p className="text-slate-600">Произведения</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                            <p className="text-slate-600">Доволни клиенти</p>
                        </div>                        
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">Свържете се с нас</h2>
                    <p className="mb-6 opacity-90">Имате въпроси? Ние сме тук, за да помогнем!</p>
                    <div className="space-y-3 text-sm sm:text-base">
                        <p><span className="font-semibold">📧 Email:</span> alinaartgifts4you@gmail.com</p>
                    </div>
                </section>

            </div>
        </div>
    );
}