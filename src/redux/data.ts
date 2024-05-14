import postImg from '../assets/images/post-def.webp'
import avatar from '../assets/images/avatar-dead-monster.svg'

export const data = {
    posts: [
        {
            id: 1,
            userId: 1,
            title: "sunt aut facere repellat provident",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            img: postImg,
        },
        {
            id: 2,
            userId: 1,
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
            img: postImg,
        },
        {
            id: 3,
            userId: 2,
            title: "ea molestias quasi exercitationem repellat ",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
            img: postImg,
        },
        {
            id: 4,
            userId: 2,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
            img: postImg,
        },
        {
            id: 5,
            userId: 3,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
            img: postImg,
        },
    ],
    users: [
        {
            id: 1,
            massagesId: '1',
            name: 'Max',
            role: 'admin',
            avatar: avatar,
        },
        {
            id: 2,
            massagesId: '2',
            name: 'Bob',
            role: 'user',
            avatar: avatar,
        },
        {
            id: 3,
            massagesId: '3',
            name: 'Alex',
            role: 'manager',
            avatar: avatar,
        },
        {
            id: 4,
            massagesId: '4',
            name: 'Dep',
            role: 'user',
            avatar: avatar,
        },
        {
            id: 5,
            massagesId: '5',
            name: 'Dan',
            role: 'user',
            avatar: avatar,
        },
    ],
    messages: {
        '1': [
            {id:'1', userMassage: 'A Cut Below', date: '01-04-2022'},
            {id:'2', userMassage: 'What Goes Up Must Come Down', date: '02-04-2022'},
            {id:'3', userMassage: 'Not the Sharpest Tool in the Shed', date: '03-04-2022'},
            {id:'4', userMassage: 'A Cold Fish', date: '04-04-2022'},
        ],
        '2': [
            {id:'1', userMassage: 'Birds of a Feather Flock Together', date: '01-05-2022'},
            {id:'2', userMassage: 'Barking Up The Wrong Tree', date: '02-05-2022'},
            {id:'3', userMassage: 'Hands Down', date: '03-06-2022'},
            {id:'4', userMassage: 'Quality Time', date: '04-05-2022'},
        ],
        '3': [
            {id:'1', userMassage: 'An Arm and a Leg', date: '01-06-2022'},
            {id:'2', userMassage: 'You Cant Judge a Book By Its Cover', date: '02-07-2022'},
            {id:'3', userMassage: 'On the Same Page', date: '03-06-2022'},
            {id:'4', userMassage: 'Rain on Your Parade', date: '04-07-2022'},
        ],
        '4': [
            {id:'1', userMassage: 'Between a Rock and a Hard Place', date: '10-07-2022'},
            {id:'2', userMassage: 'Poke Fun At', date: '20-08-2022'},
            {id:'3', userMassage: 'Under Your Nose', date: '23-09-2022'},
            {id:'4', userMassage: 'Two Down, One to Go', date: '14-04-2022'},
        ],
        '5': [
            {id:'1', userMassage: 'Beating Around the Bush', date: '19-12-2022'},
            {id:'2', userMassage: 'A Chip on Your Shoulder', date: '21-01-2022'},
            {id:'3', userMassage: 'Curiosity Killed The Cat', date: '30-10-2022'},
            {id:'4', userMassage: 'Keep Your Shirt On', date: '25-03-2022'},
        ]
    }
}


