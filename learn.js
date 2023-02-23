
var customers = [
    {
        id: 1,
        name: 'nguyen van cuong',
        email: 'nguyenvancuong@gmail.com'
    },
    {
        id: 2,
        name: 'bui tam anh',
        email: 'buitamanh@gmail.com'
    },
    {
        id: 3,
        name: 'nguyen le anh',
        email: 'nguyenleanh@gmail.com'
    },
    {
        id: 4,
        name: 'ho van cuong',
        email: 'hovancuong@gmail.com'
    }, {
        id: 5,
        name: 'nguyen xuan truong',
        email: 'xuantruong@gmail.com'
    }
]


var tr = []
let tmp = 0
for (let i = 0; i < customers.length; i++) {
    tr[i] = customers[i].id + '.' + customers[i].name + '.' + customers[i].email
}


const html = `
<table border="1" width="100%" cellpadding="0" cellspacing ="0">
    <thead>
        <tr>
            <th width = "10%" >STT</th>
            <th width = "40%">Ten</th>
            <th>Email</th>
        </tr>
    </thead>
</table > `
document.write(html)

for (let i = 0; i < tr.length; i++) {
    var result = `
<table border="1" width="100%" cellpadding="0" cellspacing ="0">
    <tbody>
        <tr>
            <td width = "10%">${tr[i].split('.')[0]}</td >
            <td width = "40%">${tr[i].split('.')[1]}</td>
            <td>${tr[i].split('.')[2]}</td>
        </tr >
    </tbody >
</table > `
    document.write(result)
}




