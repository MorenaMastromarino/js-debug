<template>
    <div id="app">
        <!-- aggiustato nome funzione changedAuthor -->
        <Header :genres="genresList" :authors="authorsList" @changedGenre="startGenreSearch" @changedAuthor="startAuthorSearch"/>

        <Main @genresAndAuthorsReady="getGenresAndAuthorsList" :selectedGenre="genreToSearch" :selectedAuthor="authorToSearch"/>
         
    </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            genresList: [],
            authorsList: [],
            genreToSearch: "",
            authorToSearch: "",
        };
    },
    methods: {
        getGenresAndAuthorsList(allGenresAndAuthors) {
            // allGenresAndAuthors = {};
            // il parametro lo passo alla funzione dall'emit del main, è un oggetto che a come parametri i due array

            this.genresList = allGenresAndAuthors.genres;
            this.authorsList = allGenresAndAuthors.authors;


        },
        startGenreSearch(genreToSearch) {
            console.log(genreToSearch);
            // genreToSearch = "";
            // non resetto il valore prima di passarlo al main
            this.genreToSearch = genreToSearch;
        },
        startAuthorSearch(authorToSearch) {
            console.log(authorToSearch);
            this.authorToSearch = authorToSearch;
        }
    },
};
</script>

<style lang="scss">
@import "./assets/styles/general";
</style>
