import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserServiceService } from '../../shared/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currentUser: User;
  username: string;

  constructor(private userService: UserServiceService) {

  }

  changeEmail() {
<<<<<<< HEAD
    // console.log("here");
=======
    console.log('here');
>>>>>>> faec37065a918b8d4ee8c6ca5d93d25352cedf22
    Swal.fire({
      title: 'Enter New Email',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        console.log(login);
        this.username = localStorage.getItem('user');
        this.userService.editUser(login).subscribe();
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `Success`,
          // imageUrl: result.value.avatar_url
        });
        window.location.reload();
      }
    });
  }

  ngOnInit() {
    this.userService.findUser().subscribe(data => {
      this.currentUser = data;
      this.username = localStorage.getItem('user');
    });
  }

}
