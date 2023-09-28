function addNew(){
    window.location="addBook.html"
}
function search(){
    window.location="searchbook.html"
}
function  backhome(){
    window.location="index.html"
}

// ADD BOOK

function addBook(){
   bookName=bn1.value
   authorName=an1.value
   coverImg=ci1.value

    if(bookName in localStorage){
        alert("book already exist")
    }
    else{
        book={bookName:bookName,authorName:authorName,coverImg:coverImg}
        localStorage.setItem(bookName,JSON.stringify(book))
        alert("book added successfully")
    }
}

// SEARCH BOOK

function searchbook(){
    bookN=sName.value

    if(bookN in localStorage){
        bookDetials=JSON.parse(localStorage.getItem(bookN))
        console.log(bookDetials);

        result.innerHTML+=
        
        `
        <div class="card text-center p-5" style="width: 50%; background-color: transparent;">
        <img src=${bookDetials.coverImg} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title"><b>Book Name:-</b> ${bookDetials.bookName}</p>
          <p class="card-text"><b>Author Name:-</b> ${bookDetials.authorName}</p>
        </div>
      </div>
      `
    }
    else{
       result.innerHTML=`<p class="text-danger"> Book Is Not Found </p>`
    }
}