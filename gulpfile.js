

var gulp = require('gulp'); // uzywaj paczki gulp
var sass = require('gulp-sass'); // uzywaj paczki galp asss
var sourcemaps = require('gulp-sourcemaps'); // dodajmy kolejna paczke

 gulp.task('sass', function() { // uruchamianiae zadania , moze miec inna nazwe, np style
return gulp.src('./scss/*.scss')  // wskazuje ze mamy pobrać wszystkie pliki z tym rozszerzeniem
.pipe(sourcemaps.init()) // inicjujemy suorce - zo zadania sass dodajemy source
.pipe(sass({
    outputStyle: 'compressed' // kod sie zminimalizuje, usuwane są zbedne spacje itp
})) // komenda do uzywania paczki- przepisanie to na sass // uruchamia funkcję
.pipe(sourcemaps.write()) // naspisuje po wlaczeniu sassa
.pipe(gulp.dest('css')); // stworzy file pod tą samą  nazwą co css
});

gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', ['sass']) // uruchamiamy zadanie watch obeserwuj wszystkie pliki scss, jezeli to sie zadzieje, wykonaj zadania sass gulp.task('sass', function
    // watch dziala caly czas
});

gulp.task('default', ['sass', 'watch']); // default - nazwa stała; za pomocą defalut zadziala sass  i po nim watch



// pipe- idz o krok dalej
