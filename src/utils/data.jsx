import { Button } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { HiChartSquareBar } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const sidebarIcons = [
  { key: "1", icon: <HiChartSquareBar />, link: "/main/dashboard" },
  { key: "2", icon: <MdShoppingCart />, link: "/main/order" },
  { key: "3", icon: <MdMyLocation />, link: "/main/marketing/stock" },
  { key: "4", icon: <BsFillPeopleFill />, link: "/main/users" },
  { key: "5", icon: <IoMdNotifications />, link: "/main/notifications" },
  { key: "6", icon: <IoMdSettings />, link: "/main/settings" },
];

const marketingRoutes = [
  { key: "1", name: "Акции", link: "/main/marketing/stock" },
  { key: "2", name: "Баннеры", link: "/main/marketing/banners" },
  { key: "3", name: "Отзывы", link: "/main/marketing/reviews" },
];

const columnsForOrder = [
  {
    title: "№",
    dataIndex: "userId",
  },
  {
    title: "Клиент",
    dataIndex: "customerName",
  },
  {
    title: "Ид.заказа",
    dataIndex: "orderId",
  },
  {
    title: "Таймер",
    dataIndex: "orderTime",
  },
  {
    title: "Курьер",
    dataIndex: "deliverer",
  },
  {
    title: "Филиал",
    dataIndex: "branch",
  },
  {
    title: "Тип доставки",
    dataIndex: "deliveryType",
  },
  {
    title: "Цена заказа",
    dataIndex: "price",
  },
  {
    title: "Адресс клиента",
    dataIndex: "deliveryAddress",
  },
  {
    title: "Action",
    render: (text, record) => (
      <Button onClick={() => handleButtonClick(record)}>
        <BsThreeDots style={{ color: "#4094F7", fontSize: "20px" }} />
      </Button>
    ),
  },
];

const orders = [
  {
    customerName: "Anvarjon",
    userId: 1,
    orderId: 2334372,
    orderTime: "02:00:00",
    price: "20000 сум",
    deliverer: "Anvar",
    deliveryType: "delivery",
    deliveryAddress: "Yunusobod",
    type: "new",
    userNumber: "+998 (90) 224 45 57",
    customerType: "new",
    branch: "Chilonzor",
  },
  {
    customerName: "John",
    userId: 2,
    orderId: 2334373,
    orderTime: "03:00:00",
    price: "15000 сум",
    deliverer: "Sarah",
    deliveryType: "pickup",
    deliveryAddress: "Downtown",
    type: "finished",
    userNumber: "+998 (91) 123 45 67",
    customerType: "old",
    branch: "Chilonzor",
  },
  {
    customerName: "Alice",
    userId: 3,
    orderId: 2334374,
    orderTime: "04:00:00",
    price: "18000 сум",
    deliverer: "Bob",
    deliveryType: "delivery",
    deliveryAddress: "Green Street",
    type: "new",
    userNumber: "+998 (92) 987 65 43",
    customerType: "new",
    branch: "Chilonzor",
  },
  {
    customerName: "Emily",
    userId: 4,
    orderId: 2334375,
    orderTime: "05:00:00",
    price: "22000 сум",
    deliverer: "Chris",
    deliveryType: "pickup",
    deliveryAddress: "Park Avenue",
    type: "new",
    userNumber: "+998 (93) 345 67 89",
    customerType: "old",
    branch: "Yakkasaroy",
  },
  {
    customerName: "Michael",
    userId: 5,
    orderId: 2334376,
    orderTime: "06:00:00",
    price: "19000 сум",
    deliverer: "Diana",
    deliveryType: "delivery",
    deliveryAddress: "Sunset Boulevard",
    type: "finished",
    userNumber: "+998 (94) 789 12 34",
    customerType: "new",
    branch: "Yakkasaroy",
  },
  {
    customerName: "Sophia",
    userId: 6,
    orderId: 2334377,
    orderTime: "07:00:00",
    price: "21000 сум",
    deliverer: "Edward",
    deliveryType: "pickup",
    deliveryAddress: "Ocean Drive",
    type: "new",
    userNumber: "+998 (95) 234 56 78",
    customerType: "old",
    branch: "Yakkasaroy",
  },
  {
    customerName: "William",
    userId: 7,
    orderId: 2334378,
    orderTime: "08:00:00",
    price: "24000 сум",
    deliverer: "Fiona",
    deliveryType: "delivery",
    deliveryAddress: "Mountain View",
    type: "new",
    userNumber: "+998 (96) 456 78 90",
    customerType: "new",
    branch: "Yakkasaroy",
  },
  {
    customerName: "Olivia",
    userId: 8,
    orderId: 2334379,
    orderTime: "09:00:00",
    price: "17000 сум",
    deliverer: "George",
    deliveryType: "pickup",
    deliveryAddress: "Lake Road",
    type: "finished",
    userNumber: "+998 (97) 789 01 23",
    customerType: "old",
    branch: "Uchtepa",
  },
  {
    customerName: "Daniel",
    userId: 9,
    orderId: 2334380,
    orderTime: "10:00:00",
    price: "26000 сум",
    deliverer: "Hannah",
    deliveryType: "delivery",
    deliveryAddress: "River Street",
    type: "new",
    userNumber: "+998 (98) 123 45 67",
    customerType: "new",
    branch: "Uchtepa",
  },
  {
    customerName: "Emma",
    userId: 10,
    orderId: 2334381,
    orderTime: "11:00:00",
    price: "23000 сум",
    deliverer: "Isaac",
    deliveryType: "pickup",
    deliveryAddress: "Main Street",
    type: "new",
    userNumber: "+998 (99) 567 89 01",
    customerType: "new",
    branch: "Uchtepa",
  },

  {
    customerName: "Liam",
    userId: 11,
    orderId: 2334382,
    orderTime: "12:00:00",
    price: "28000 сум",
    deliverer: "Julia",
    deliveryType: "delivery",
    deliveryAddress: "High Street",
    type: "new",
    userNumber: "+998 (91) 234 56 78",
    customerType: "old",
    branch: "Uchtepa",
  },
  {
    customerName: "Ava",
    userId: 12,
    orderId: 2334383,
    orderTime: "13:00:00",
    price: "17000 сум",
    deliverer: "Kevin",
    deliveryType: "pickup",
    deliveryAddress: "Park Lane",
    type: "finished",
    userNumber: "+998 (92) 345 67 89",
    customerType: "old",
    branch: "Uchtepa",
  },
  {
    customerName: "Noah",
    userId: 13,
    orderId: 2334384,
    orderTime: "14:00:00",
    price: "21000 сум",
    deliverer: "Laura",
    deliveryType: "delivery",
    deliveryAddress: "Forest Avenue",
    type: "new",
    userNumber: "+998 (93) 456 78 90",
    customerType: "old",
    branch: "Uchtepa",
  },
  {
    customerName: "Mia",
    userId: 14,
    orderId: 2334385,
    orderTime: "15:00:00",
    price: "19000 сум",
    deliverer: "Mark",
    deliveryType: "pickup",
    deliveryAddress: "Sunrise Boulevard",
    type: "new",
    userNumber: "+998 (94) 567 89 01",
    customerType: "new",
    branch: "Uchtepa",
  },
];

const stocksArray = [
  {
    key: "1",
    title: "Vulputate velit lacus, enim viverra quis.",
    startDate: "2024-06-10",
    endDate: "2021-09-01",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg",
  },
  {
    key: "2",
    title: "Sit amet consectetur adipiscing elit.",
    startDate: "2021-03-15",
    endDate: "2021-07-30",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg",
  },
  {
    key: "3",
    title: "Dolor sit amet ipsum consectetur adipiscing elit.",
    startDate: "2021-04-20",
    endDate: "2021-11-10",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/3_abies_concolor/thumbnail/52292935430_f4f3b22614_b.jpg",
  },
  {
    key: "4",
    title: "Adipiscing elit sit amet ipsum.",
    startDate: "2021-02-05",
    endDate: "2021-08-25",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/4_abies_concolor_candicans/thumbnail/49283844888_332c9e46f2_b.jpg",
  },
  {
    key: "5",
    title: "Vulputate ipsum sit amet adipiscing elit.",
    startDate: "2021-08-18",
    endDate: "2021-12-05",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/5_abies_fraseri/thumbnail/36843539702_e80fc436e0_b.jpg",
  },
  {
    key: "6",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    startDate: "2021-05-03",
    endDate: "2021-10-20",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/6_abies_koreana_aurea/thumbnail/49235570926_99ec10781d_b.jpg",
  },
  {
    key: "7",
    title: "Sit amet consectetur adipiscing elit.",
    startDate: "2021-09-15",
    endDate: "2022-02-28",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/6_abies_koreana_aurea/thumbnail/49235570926_99ec10781d_b.jpg",
  },
  {
    key: "8",
    title: "Vulputate velit sit amet consectetur.",
    startDate: "2021-07-21",
    endDate: "2021-12-10",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/7_abies_lasiocarpa/thumbnail/51002756843_74fae3c2fa_b.jpg",
  },
  {
    key: "9",
    title: "Adipiscing elit sit amet consectetur.",
    startDate: "2021-10-10",
    endDate: "2022-03-05",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/thumbnail/21657514018_c0d9fed9f4_b.jpg",
  },
  {
    key: "10",
    title: "Vulputate ipsum sit amet consectetur.",
    startDate: "2021-12-01",
    endDate: "2022-06-20",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/9_abies_procera/thumbnail/49107504112_6bd7effb8b_b.jpg",
  },
  {
    key: "11",
    title: "Consectetur adipiscing elit sit amet ipsum.",
    startDate: "2021-06-05",
    endDate: "2021-11-30",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "12",
    title: "Dolor sit amet consectetur adipiscing elit.",
    startDate: "2021-04-12",
    endDate: "2021-09-25",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/11_acer_davidii/thumbnail/6868591754_f4ac5b0510_b.jpg",
  },
  {
    key: "13",
    title: "Sit amet ipsum dolor consectetur adipiscing elit.",
    startDate: "2021-08-19",
    endDate: "2022-02-05",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/12_acer_ginnala/thumbnail/10476032513_76ca899bc4_b.jpg",
  },
  {
    key: "14",
    title: "Lorem ipsum sit amet consectetur adipiscing elit.",
    startDate: "2021-03-25",
    endDate: "2021-09-10",
    status: "Неактивный",
    stockImage:
      "https://perenual.com/storage/species_image/13_acer_ginnala_flame/thumbnail/pexels-photo-1649190.jpg",
  },
  {
    key: "15",
    title: "Sit amet consectetur adipiscing elit.",
    startDate: "2021-09-07",
    endDate: "2022-02-28",
    status: "Активный",
    stockImage:
      "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/thumbnail/pexels-photo-1789879.jpg",
  },
];

const bannerArray = [
  {
    key: "1",
    uzbTitle: "Consectetur",
    rusTitle: "Вторжение",
    status: "Активный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "2",
    uzbTitle: "Lorem",
    rusTitle: "Печенье",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "3",
    uzbTitle: "Dolor",
    rusTitle: "Ракета",
    status: "Активный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "4",
    uzbTitle: "Sit",
    rusTitle: "Солнце",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "5",
    uzbTitle: "Amet",
    rusTitle: "Луна",
    status: "Активный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "6",
    uzbTitle: "Consectetur",
    rusTitle: "Планета",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "7",
    uzbTitle: "Adipiscing",
    rusTitle: "Звезда",
    status: "Активный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "8",
    uzbTitle: "Elit",
    rusTitle: "Галактика",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "9",
    uzbTitle: "Sed",
    rusTitle: "Космос",
    status: "Активный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "10",
    uzbTitle: "Do eiusmod",
    rusTitle: "Внеземные существа",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
  {
    key: "11",
    uzbTitle: "Do eiusmod",
    rusTitle: "Внеземные существа",
    status: "Неактивный",
    bannerImage:
      "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
  },
];
const comments = [
  {
    key: 1,
    comment: "🌟 Отличная доставка курьер",
    uzbekComment: "🌟 Йахши етказиш курьер",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 2,
    comment: "🚀 Прекрасное блюдо вкусное",
    uzbekComment: "🚀 Асосий таом ширин",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 3,
    comment: "😋 Ужасный опыт ресторан",
    uzbekComment: "😋 Жуда ёмон тажриба ресторан",
    type: "bad",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 4,
    comment: "🙁 Великолепный заказ доставка",
    uzbekComment: "🙁 Асосий буюртма етказиш",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 5,
    comment: "😔 Удивительный вкус еда",
    uzbekComment: "😔 Жуда хайратланарли тадбир",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 6,
    comment: "💔 Плохой заказ шеф-повар",
    uzbekComment: "💔 Ёмон буюртма шеф-повар",
    type: "bad",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 7,
    comment: "👍 Фантастическое обслуживание заведение",
    uzbekComment: "👍 Фантастик хизмат тадбир",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 8,
    comment: "👎 Вкуснейшая еда кулинария",
    uzbekComment: "👎 Мазарадор таом кулинария",
    type: "bad",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 9,
    comment: "🍕 Невероятное блюдо ресторан",
    uzbekComment: "🍕 Жуда хайратландирувчи тадбир ресторан",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 10,
    comment: "🍔 Успешная покупка курьер",
    uzbekComment: "🍔 Муваффақиятли харид курьер",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 11,
    comment: "🍟 Чудесное меню заведение",
    uzbekComment: "🍟 Муҳташам меню тадбир",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 12,
    comment: "🍗 Отличное блюдо шеф-повар",
    uzbekComment: "🍗 Йахши таом шеф-повар",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 13,
    comment: "🍣 Превосходное обслуживание кулинария",
    uzbekComment: "🍣 Олиб бориш муаллиф кулинария",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 14,
    comment: "🍦 Уютное заведение кулинария",
    uzbekComment: "🍦 Қулай тадбир кулинария",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 15,
    comment: "🥗 Отличное блюдо ресторан",
    uzbekComment: "🥗 Йахши таом ресторан",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 16,
    comment: "🍰 Приятное обслуживание ресторан",
    uzbekComment: "🍰 Жойлаштирувчи хизмат ресторан",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 17,
    comment: "🍹 Удобная доставка кулинария",
    uzbekComment: "🍹 Қулай етказиш кулинария",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 18,
    comment: "🍔 Великолепное меню ресторан",
    uzbekComment: "🍔 Асосий меню ресторан",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
  {
    key: 19,
    comment: "🍕 Интересное блюдо кулинария",
    uzbekComment: "🍕 Таниқли таом кулинария",
    type: "good",
    status: "Неактивный",
    uzbekStatus: "Неактивный",
    reason: "Шеф-повар",
    uzbekReason: "Шеф-повар",
  },
  {
    key: 20,
    comment: "🍗 Отличное качество кулинария",
    uzbekComment: "🍗 Йахши сифат кулинария",
    type: "good",
    status: "Активный",
    uzbekStatus: "Фаол",
    reason: "Курьер",
    uzbekReason: "Курьер",
  },
];

const data = [
  { name: "Понедельник", uv: 2000, pv: 400, amt: 600 },
  { name: "Вторник", uv: 1500, pv: 3000, amt: 800 },
  { name: "Среда", uv: 2000, pv: 1000, amt: 1000 },
  { name: "Вторник", uv: 1500, pv: 3800, amt: 800 },
  { name: "Четверг", uv: 1500, pv: 3000, amt: 800 },
  { name: "Пятница", uv: 2000, pv: 1500, amt: 600 },
  { name: "Суббота", uv: 4000, pv: 5000, amt: 4000 },
  { name: "Воскрессенье", uv: 2780, pv: 3008, amt: 1800 },
];
const data2 = [
  { name: "Вторник", uv: 1500, pv: 3000, amt: 800 },
  { name: "Понедельник", uv: 2000, pv: 400, amt: 600 },
  { name: "Среда", uv: 2000, pv: 1000, amt: 1000 },
  { name: "Вторник", uv: 1500, pv: 3800, amt: 800 },
  { name: "Пятница", uv: 2000, pv: 1500, amt: 600 },
  { name: "Воскрессенье", uv: 2780, pv: 3008, amt: 1800 },
  { name: "Четверг", uv: 1500, pv: 3000, amt: 800 },
  { name: "Суббота", uv: 4000, pv: 5000, amt: 4000 },
];
const data3 = [
  { name: "Пятница", uv: 2000, pv: 1500, amt: 600 },
  { name: "Вторник", uv: 1500, pv: 3000, amt: 800 },
  { name: "Среда", uv: 2000, pv: 1000, amt: 1000 },
  { name: "Понедельник", uv: 2000, pv: 400, amt: 600 },
  { name: "Суббота", uv: 4000, pv: 5000, amt: 4000 },
  { name: "Вторник", uv: 1500, pv: 3800, amt: 800 },
  { name: "Воскрессенье", uv: 2780, pv: 3008, amt: 1800 },
  { name: "Четверг", uv: 1500, pv: 3000, amt: 800 },
];

const tinyTopData = [
  {
    id: 1,
    title: "Total orders this month",
    price: "1,850",
    profit: -5,
    icon: <FaAngleDown />,
    chart: (
      <ResponsiveContainer width={356} height={101}>
        <AreaChart
          width={100}
          height={"100px"}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="chartBackground" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(248, 197, 27, 0.8)" />
              <stop offset="100%" stopColor="rgba(248, 221, 78, 0.1)" />
            </linearGradient>
          </defs>

          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={2}
            stroke="#F8C51B"
            fill="url(#chartBackground)"
            animationDuration={3000}
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: 2,
    title: "Earning this month",
    price: "$6,250",
    profit: +25,
    icon: <FaAngleUp />,
    chart: (
      <ResponsiveContainer width={356} height={101}>
        <AreaChart
          width={200}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          /* In your stylesheet */
          <defs>
            <linearGradient id="secondTinyGradinet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(162, 63, 238, 0.8)" />
              <stop offset="100%" stopColor="rgba(162, 63, 238, 0.1)" />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={2}
            stroke="#A23FEE"
            fill="url(#secondTinyGradinet)"
            animationDuration={3000}
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    id: 3,
    title: "Total orders this month",
    price: "$12,750",
    profit: -12,
    icon: <FaAngleUp />,
    chart: (
      <ResponsiveContainer width={356} height={101}>
        <AreaChart
          width={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="tinyLinear3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(242, 39, 28, 0.8)" />
              <stop offset="100%" stopColor="rgba(242, 39, 28, 0.1)" />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={2}
            stroke="#F2271C"
            fill="url(#tinyLinear3)"
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
];

export {
  orders,
  columnsForOrder,
  stocksArray,
  sidebarIcons,
  marketingRoutes,
  bannerArray,
  comments,
  data,
  data2,
  data3,
  tinyTopData,
};
