const bookList = [
    {id:'1',booksName:'Война и мир', author:'Лев Толстой', description:'В этой книге читатель вновь встретится с полюбившимися героями: среднестатистическим приспособленцем Артуром Дентом, сотрудником межгалактического издательства Фордом Префектом, продвинутой барышней Триллиан, депрессивным роботом Марвином, — и отправится вместе с ними в новые странствия по бесчисленным мирам, наполненным опасными приключениями и непредсказуемыми сюрпризами!'},
    {id:'2',booksName:'«Автостопом по галактике» ', author:'Дуглас Адамс',description:'sdsdfasdf'},
    {id:'3',booksName:'«Алиса в Стране чудес»', author:'Льюис Кэрролл',description:'wrgwrgq5hw'},
    {id:'4',booksName:'«Алхимик» ', author:'Пауло Коэльо',description:'dfgadfgda'},
    {id:'5',booksName:'«Белый пик»', author:'Энтони Хоровитц',description:'ergqergdrg'},
    {id:'6',booksName:'«Большие надежды»', author:'Чарльз Диккенс',description:'ergaergq3g'},
    {id:'7',booksName:'«Винни-Пух и все-все-все»', author:'Алан Милн',description:'ethqw4hwrtgdfv'},
    {id:'8',booksName:'«Властелин колец»', author:'Джон Р. Р. Толкин',description:'aergaergq35g'},
    {id:'9',booksName:'«Грозовой перевал»', author:'Эмили Бронте',description:'regq34gqdfvzdf'},
    {id:'10',booksName:'«Дети полуночи» ', author:'Салман Рушди',description:'ea4gq3gdfg'},
    {id:'11',booksName:'«Дневник Бриджит Джонс»', author:'Хелен Филдинг',description:'5yjdtyhdfgdf'},
    {id:'12',booksName:'«Женщина в белом»', author:' Уильям Уилки Коллинз',description:'wrthw45hsg'},
    {id:'13',booksName:'Война и мир часть 1', author:'Лев Толстой',description:'rthw45sgrwtw4 r tgrthert'},
    {id:'14',booksName:'Война и мир часть 2', author:'Лев Толстой',description:'erthhw wrtgwrth'},
    {id:'15',booksName:'Война и мир часть 3', author:'Лев Толстой',description:'rthw4tlk wergwerg wergwergerg'},
    {id:'16', booksName:"«Мастер и Маргарита»", author:"Михаил Булгаков", description:"hdjfajhfdajhsd"}
];




let booksDatabase = {

  bookList: bookList,

  findBookById: (searchedId) => bookList.find(({id}) => id === searchedId),

    findBooksByAuthor:(searchedAuthors) => bookList.filter(({author}) => author === searchedAuthors),

    //creadNewArrayList: function(startList, endList){
    //    let newArrayBooks = bookList.slice(startList, endList);
    //    console.log(newArrayBooks, 'newArrayBooks')
    //    return newArrayBooks;
    //    newArrayBooks.push( bookList);
    //},
//

//findBookById2: (searchedId) => bookList.find((item) => item.id === searchedId)
  //findBookById3: function (searchedId) {
  //    return  bookList.find((item) => item.id === searchedId)
  //}

};

export default booksDatabase;