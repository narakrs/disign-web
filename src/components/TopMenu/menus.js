const thietlap = [
    {
        name: 'Quản lý Tài khoản',
        to: '/StockTakes',
        exact: true,
        icon: 'fa fa-check-square',
    }
]
const taikhoan = [
    {
        name: 'Tài khoản',
        to: '/Propducts',
        exact: true,
        icon: 'fa fa-th',
    },
    {
        name: 'Đăng xuất',
        to: '/logout',
        exact: true,
        icon: 'fa fa-edit',
    }
]

export const menus = [
    { name: 'Tài khoản', to: '/taikhoan', exact: true, icon: 'fa fa-caret-down', list: taikhoan },
    { name: 'Thiết lập', to: '/dangnhap', exact: false, icon: 'fa fa-caret-down', list: thietlap },
];
