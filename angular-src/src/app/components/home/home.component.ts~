import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WeightService} from '../../services/weight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  exercises: string[];

  constructor(
    private router: Router,
    private weightService: WeightService) {
    this.username = JSON.parse(localStorage.getItem('user')).username.toUpperCase();
  }

  ngOnInit() {
    this.exercises = ['Deadlift', 'Bench', 'Squat'];
  }

  navigate(exercise: string) {
    exercise = exercise.toLowerCase();
    var max;
    var currentWeight;
    var currentReps;
    this.weightService.getMax(exercise).subscribe(data => {
      if (data.success) max = data.max;
      else max = 0;
      this.weightService.getCurrent(exercise).subscribe(datum => {
        if (data.success) {
          currentWeight = datum.current.weight;
          currentReps = datum.current.reps;
        } else {
          currentWeight = 0;
          currentReps = 0;
        }

        if (max == 0 || (currentWeight >= max * .8 && currentReps >= 8)) {
          this.router.navigate(['/max', {exercise: exercise}]);
        } else {
          this.router.navigate(['/work', {exercise: exercise}]);
        }
      });
    });
  }

}
