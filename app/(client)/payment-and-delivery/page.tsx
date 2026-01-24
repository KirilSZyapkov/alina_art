export default function PaymentAndDeliveryPage() {
    return (
        <div className="container mx-auto py-10 px-5 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Плащане и доставка</h1>
            <h2 className="text-2xl font-semibold mb-4">Методи на плащане</h2>
            <p className="text-lg text-gray-700 mb-6">
                При нас можете да изберете между няколко удобни метода на плащане:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
                <li className="text-gray-400">Плащане с кредитна/дебитна карта <span className="text-red-600 text-sm">- comming soon</span></li>
                <li className="text-gray-400">Плащане чрез PayPal <span className="text-red-600 text-sm">- comming soon</span></li>
                <li>Наложен платеж при доставка</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
            <p className="text-lg text-gray-700 mb-6">
                Ние предлагаме бърза и надеждна доставка до всяка точка на страната. Времето за доставка обикновено е в срок до 72, в зависимост от вашето местоположение, с изключение на почивните дни и националните празници.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Таксите за доставка се изчисляват на база таксата на куриерската фирма. 
            </p>
            <p className="text-lg text-gray-700">
                Благодарим ви, че избрахте нашия магазин! Ако имате допълнителни въпроси относно плащането или доставката, не се колебайте да се свържете с нас.
            </p>
        </div>
    )
}