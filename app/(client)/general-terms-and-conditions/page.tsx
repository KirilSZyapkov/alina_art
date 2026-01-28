export default function GeneralTermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
            <section className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Общи условия
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Последна актуализация: {new Date().toLocaleDateString("bg-BG")}
                </p>

                <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">1. Общи положения</h2>
                        <p>
                            Настоящите общи условия уреждат правилата за използване на този уебсайт,
                            включително покупката и продажбата на продукти чрез него.
                        </p>
                        <p>
                            С достъпа и използването на сайта, Вие се съгласявате с тези условия.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">2. Продукти и поръчки</h2>
                        <p>
                            Всички продукти, предлагани на сайта, са ръчно изработени или лимитирани,
                            поради което е възможно минимално разминаване с представените изображения.
                        </p>
                        <p>
                            Поръчката се счита за приета след потвърждение от страна на сайта.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">3. Цени и плащане</h2>
                        <p>
                            Всички цени са в евро (EUR), освен ако не е указано друго.
                        </p>
                        <p>
                            Сайтът си запазва правото да променя цените по всяко време,
                            като това не засяга вече направени поръчки.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">4. Доставка и отказ</h2>
                        <p>
                            Доставката се извършва чрез куриер до адрес, посочен от клиента.
                        </p>
                        <p>
                            Съгласно Закона за защита на потребителите, клиентът има право на отказ в срок от 14 дни,
                            освен в случаите на персонализирани или изработени по поръчка продукти.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">5. Интелектуална собственост</h2>
                        <p>
                            Всички текстове, изображения и съдържание на сайта са обект на авторско право.
                            Забранено е тяхното използване без изрично писмено съгласие.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">6. Промени в условията</h2>
                        <p>
                            Сайтът си запазва правото да променя настоящите общи условия по всяко време.
                            Актуалната версия винаги ще бъде достъпна на тази страница.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">7. Контакти</h2>
                        <p>
                            При въпроси можете да се свържете с нас на имейл:
                            <span className="font-medium text-gray-900 dark:text-white"> support@example.com</span>
                        </p>
                    </section>
                </div>
            </section>
        </div>
    );
}    