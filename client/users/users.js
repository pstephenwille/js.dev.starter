import './users.css';
import {getUsers, deleteUser} from '../api/userApi.rx';

// Populate table of users via API call.
/* rxjs */
let subscription = getUsers()
    .subscribe(
        displayUsers,
        e => {console.log('......error ', e)},
        () => {
            createDeleteLinks();
            console.log('.......user complete ')
        }
    );

function displayUsers(users) {
    let userHtml = `<table>
                <thead>
                  <th>&nbsp;</th>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Woot</ht>
            </thead>
            <tbody>`;
    users.forEach(user => {
        userHtml +=`<tr>
              <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
              <td>${user.id}</td>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
              <td>${user.woot}</td>
          </tr>`
    });
    userHtml += '</tbody>';

    document.getElementById('users').innerHTML = userHtml;
}

function createDeleteLinks() {
    const deleteLinks = document.getElementsByClassName('deleteUser');
    // Must use array.from to create a real array from a DOM collection
    // getElementsByClassname only returns an "array like" object
    Array.from(deleteLinks, link => {
        link.onclick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value).subscribe();
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
}

