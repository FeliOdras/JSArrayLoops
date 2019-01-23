const contacts = [
    [
        'Justus',
        'Jonas',
        [
            'justus@mail.com'
        ]
    ],
    [
        'Peter',
        'Shaw',
        [
            'peter.shaw@mail.com',
            'peter.shaw@mail.de',
        ]
    ],
    [
        'Bob',
        'Andrews',
        [
            'bob.andrews@mail.com',
            'bob.andrews@mail.de',
        ]
    ]
];
let templateString = `<table class="table table-striped table-bordered"><thead><tr><td>First Name</td><td>Last Name</td><td>Email</td><tbody>`;
contacts.map(singleContact => {
    templateString += `<tr>`
    singleContact.map(singleContactData => {
        templateString += `<td>${singleContactData}</td>`
    })
    templateString += `</tr>`
})
templateString += `</tbody></table>`

console.log(templateString);
document.getElementById('table').innerHTML = templateString;