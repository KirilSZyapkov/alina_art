import {getProductsAction} from "@/app/actions/product.actions";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import LineChartComponent from "../../_components/lineChart";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default async function DashboardPage() {

  const currentMonth = month[new Date().getMonth()];
  return (
    <section className="container m-auto flex flex-col gap-4 py-5 px-5 sm:px-2">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-slate-900">Общ брой продукти</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Fetch and display total products */}
            <div className="text-xl font-bold text-gray-500">
              {/* Placeholder for total products count */}
              120
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
          <CardHeader>
            <CardTitle className="font-semibold text-slate-900 text-3xl">Активни поръчки</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-slate-900 text-xl">Чакащи поръчки</p>
              <p className="text-gray-500 text-xl">5</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-slate-900 text-xl">Обработени поръчки</p>
              <p className="text-gray-500 text-xl">15</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-l-4 border-purple-500">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-slate-900">Активни продажби</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-slate-900">Продажби за месец - <span className="underline text-red-700">{currentMonth}</span></p>
              <p className="text-gray-500 text-xl">5</p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Revenue Line Chart */}
      <div>
        <LineChartComponent/>
      </div>

      {/* Bar Chart - Top Products / Pie - Order Status */}
      <div>графика месечна таргет продажби</div>

      {/* Orders Table */}
      <div>графика продажби годишно</div>
    </section>
  )
}