import { faHome, faBoxes, faBook} from '@fortawesome/free-solid-svg-icons';

var dashboardRoutes = [
    {
        path: "/",
        name: "Home",
        icon: faHome,
        //   component: Home
    },
    {
        path: "/product",
        name: "Barang",
        icon: faBoxes,
        //   component: Barang
        // submenu: [
        //     {
        //         path: "/barang/daftar",
        //         name: "List Barang"
        //     }
        // ]
    },
    {
        path: "/order",
        name: "Pemesanan",
        icon: faBook,
        //   component: Home
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashboardRoutes;