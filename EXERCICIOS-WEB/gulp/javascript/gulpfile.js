const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // remove os comentários do arquivo
            presets: ["env"] // converte o código para a versão mais atual do JS
        }))
        .pipe(uglify()) // minifica o código
        .on('error', err => console.log(err)) // caso ocorra um erro, exibe no console
        .pipe(concat('codigo.min.js')) // concatena todos os arquivos em um só
        .pipe(gulp.dest('build'))

    return cb()
}

exports.default = series(transformacaoJS)