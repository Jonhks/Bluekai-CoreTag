const btnForm = document.getElementById('btn-form');

const sendForm = () => {
  const exampleInputName = document.getElementById('exampleInputName').value;
  const exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;
  const exampleInputPhone = document.getElementById('exampleInputPhone').value;
  console.log(exampleInputName, exampleInputEmail1, exampleInputPhone)
  bk_addEMailHash(exampleInputEmail1);
  bk_addPhoneHash(exampleInputPhone);
}

btnForm.addEventListener('click', sendForm)


//pass MD5 and SHA-256 hashed oHashes for ID swaps using the following syntax:
//bk_addEMailHash(“user@domain.com”);
//bk_addPhoneHash(“<Country Code><Number>”);
// console.log(addEMailHash)
// bk_addEMailHash("joecool@gmail.com");
// bk_addPhoneHash("14085551212");

// // bk_addPageCtxfunción
// //pass page and user attributes using the following syntax:
// //bk_addPageCtx('Key', 'Value');
// bk_addPageCtx("prodType", "Laptop");
// bk_addPageCtx("prodModel", "Z3-HX2");
// //pass UUIDs for ID swaps using the following syntax:
// //bk_addPageCtx('id', 'Value');
// bk_addPageCtx("id", "5Gya3quS");
// //pass oHashes (MD5 and SHA-256 hashed email addresses and phone numbers) using the following syntax:
// //bk_addEMailHash(“user@domain.com”);
// //bk_addPhoneHash(“<Country Code><Number>”);
// bk_addEMailHash("joecool@gmail.com");
// bk_addPhoneHash("14085551212");
// //block passing of meta data (URL, meta keywords, and page title)
// bk_ignore_meta = true;
// //pass your Site ID and the pixel limit using the following syntax:
// //bk_doJSTag('Site ID', 'Pixel Limit');
// bk_doJSTag(71403,1);


const url = "https://www.eluniversal.com.mx/​ "

fetch (url)
.then(response => response)
.then(resp => resp.json())
.then(data => console.log(data))

.catch(err => console.error(err))