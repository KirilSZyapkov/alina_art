import { getProductsAction } from "@/app/actions/product.actions";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default async function DashboardPage(){
    return(
        <section className="container bg-slate-100 flex flex-col gap-4 py-5">
            {/* KPI Cards */}
           <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 mb-12">
            <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-900">Общ брой продукти</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Fetch and display total products */}
                    <div className="text-3xl font-bold text-slate-900">
                        {/* Placeholder for total products count */}
                        120
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-900">Активни поръчки</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-slate-900">
                        <p>Чакащи поръчки</p>
                        <p>5</p>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">
                        <p>Обработени поръчки</p>
                        <p>15</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-900">Активни поръчки</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-slate-900">
                        <p>Продажби за месец {new Date().getFullYear()}</p>
                        <p>5</p>
                    </div>
                </CardContent>
            </Card>
           </div>
            {/* Revenue Line Chart */}
           <div>общ брой поръчки</div>

           {/* Bar Chart - Top Products / Pie - Order Status */}
           <div>графика месечна таргет продажби</div>

           {/* Orders Table */}
           <div>графика продажби годишно</div>
        </section>
    )
}