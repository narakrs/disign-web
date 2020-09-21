const hanghoa = [
    {
        name: 'Mua điểm',
        to: '/Propducts',
        exact: true,
        icon: 'fa fa-usd',
    },
    {
        name: 'Mua subcrice',
        to: '/PriceBook',
        exact: true,
        icon: 'fa fa-edit',
    },
    {
        name: 'Mua gói quà',
        to: '/StockTakes',
        exact: true,
        icon: 'fa fa-gift',
    }
]
const giaodich = [
    {
        name: 'Views',
        to: '/SystemViews',
        exact: true,
        icon: 'fa fa-youtube-play',
    },
    {
        name: 'Subcrice',
        to: '/Subcrice',
        exact: true,
        icon: 'fa fa-users',
    },
    {
        name: 'Comment',
        to: '/Comment',
        exact: true,
        icon: 'fa fa-share-square-o',
    },
    {
        name: 'Like',
        to: '/PurchaseReturns',
        exact: true,
        icon: 'fa fa-thumbs-up',
    },
    {
        name: 'Dis like',
        to: '/DamageItems',
        exact: true,
        icon: 'fa fa-thumbs-o-down',
    },
]
const doitac = [
    {
        name: 'Theo ngày',
        to: '/Customers',
        exact: true,
        icon: 'fa fa-check-circle',
    },
    {
        name: 'Theo tuần',
        to: '/Suppliers',
        exact: true,
        icon: 'fa fa-dot-circle-o',
    },
    {
        name: 'Theo tháng',
        to: '/PurchaseOrder',
        exact: true,
        icon: 'fa fa-bullseye',
    },
    {
        name: 'Theo trò chơi',
        to: '/PurchaseOrder',
        exact: true,
        icon: 'fa fa-gamepad',
    }
]
const nhanvien = [
    {
        name: 'Nhân viên',
        to: '/Employee',
        exact: true,
        icon: 'fa fa-users',
    },
    {
        name: 'Chấm công',
        to: '/TimeSheet',
        exact: true,
        icon: 'fa fa-calendar',
    },
    {
        name: 'Bảng tính lương',
        to: '/Paysheet',
        exact: true,
        icon: 'fa fa-money',
    },
    {
        name: 'Thiết lập hoa hồng',
        to: '/Commission',
        exact: true,
        icon: 'fa fa-bitcoin',
    }
]
const baocao = [
    {
        name: 'Cuối ngày',
        to: '/EndOfDayReport',
        exact: true,
        icon: 'fa fa-pie-chart',
    },
    {
        name: 'Bán hàng',
        to: '/SaleReport',
        exact: true,
        icon: 'fa fa-file-archive-o',
    },
    {
        name: 'Hàng hóa',
        to: '/ProductReport',
        exact: true,
        icon: 'fa fa-cube',
    },
    {
        name: 'Khách hàng',
        to: '/CustomerReport',
        exact: true,
        icon: 'fa fa-user',
    },
    {
        name: 'Nhà cung cấp',
        to: '/SupplierReport',
        exact: true,
        icon: 'fa fa-undo',
    },
    {
        name: 'Nhân viên',
        to: '/UserReport',
        exact: true,
        icon: 'fa fa-male',
    },
    {
        name: 'Kênh bán hàng',
        to: '/SaleChannelReport',
        exact: true,
        icon: 'fa fa-shopping-cart',
    },
    {
        name: 'Tài Chính',
        to: '/FinancialReport',
        exact: true,
        icon: 'fa fa-line-chart',
    }
]
export const menus = [
    { name: 'Tổng Quan', to: '/Dashboard', exact: true, icon: 'fa fa-eye', list: null },
    { name: 'Cửa hàng', to: '/product-list', exact: false, icon: 'fa fa-shopping-cart', list: hanghoa },
    { name: 'Blog', to: '/TableAndRoom', exact: false, icon: 'fa fa-newspaper-o', list: null },
    { name: 'Giao dịch', to: '/giaodich', exact: false, icon: 'fa fa-youtube-play', list: giaodich },
    { name: 'Tích điểm', to: '/doitac', exact: false, icon: 'fa fa-line-chart', list: doitac },
];
