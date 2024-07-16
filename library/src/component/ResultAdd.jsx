import React, { useEffect, useState } from "react";
import instance from "../firebase/instance";
import ResultList from "./ResultList";

const booksData = [
  { id: 0, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
  { id: 2, title: "الحاوي في الطب", author: "ابو بكر الرازي", isbn: "893847239479" },
  { id: 3, title: "ألف ليلة وليلة", author: "غير معروف", isbn: "1234567890" },
  { id: 4, title: "كليلة ودمنة", author: "ابن المقفع", isbn: "0987654321" },
  { id: 5, title: "ديوان المتنبي", author: "المتنبي", isbn: "1122334455" },
  { id: 6, title: "الأدب الكبير والأدب الصغير", author: "ابن المقفع", isbn: "2233445566" },
  { id: 7, title: "التفكر في معاني القرآن", author: "ابن كثير", isbn: "3344556677" },
  { id: 8, title: "حي بن يقظان", author: "ابن طفيل", isbn: "4455667788" },
  { id: 9, title: "المسالك والممالك", author: "ابن خرداذبة", isbn: "5566778899" },
  { id: 10, title: "الأغاني", author: "أبو الفرج الأصفهاني", isbn: "6677889900" },
  { id: 11, title: "البخلاء", author: "الجاحظ", isbn: "7788990011" },
  { id: 12, title: "رسالة الغفران", author: "أبو العلاء المعري", isbn: "8899001122" },
  { id: 13, title: "البيان والتبيين", author: "الجاحظ", isbn: "9900112233" },
  { id: 14, title: "كتاب سيبويه", author: "سيبويه", isbn: "0011223344" },
  { id: 15, title: "المعلقات السبع", author: "غير معروف", isbn: "1133445566" },
  { id: 16, title: "الشفا بتعريف حقوق المصطفى", author: "القاضي عياض", isbn: "2244556677" },
  { id: 17, title: "رحلة ابن بطوطة", author: "ابن بطوطة", isbn: "3355667788" },
  { id: 18, title: "إحياء علوم الدين", author: "أبو حامد الغزالي", isbn: "4466778899" },
  { id: 19, title: "فتوح البلدان", author: "البلاذري", isbn: "5577889900" },
  { id: 20, title: "تاريخ الطبري", author: "ابن جرير الطبري", isbn: "6688990011" },
  { id: 21, title: "الأربعين النووية", author: "الإمام النووي", isbn: "7799001122" },
  { id: 22, title: "زاد المعاد في هدي خير العباد", author: "ابن القيم الجوزية", isbn: "8899112233" },
  { id: 23, title: "الكامل في اللغة والأدب", author: "المبرد", isbn: "9900223344" },
  { id: 24, title: "الفوائد", author: "ابن قيم الجوزية", isbn: "0011334455" },
  { id: 25, title: "المستطرف في كل فن مستظرف", author: "الأبشيهي", isbn: "1133556677" }
];

function ResultAdd() {
  
  const [fetchedData, setFetchedData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get("Book.json");
        const fetched = [];
        for (let key in res.data) {
          fetched.push({ ...res.data[key], id: key });
        }
        setFetchedData(fetched);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const handlePost = async () => {
  //     try {
  //       await instance.post("/Book.json", booksData);
  //       console.log("Data posted successfully!");
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //     }
  //   };
  //   handlePost();
  // }, []);





  //  Post data to Firebase
 
    // const handlePost = async () => {
    //   const existingBooks = fetchedData.map(book => book.id);
    //   const postPromises = booksData.map(book => {
    //     if (!existingBooks.includes(book.id.toString())) {
    //       return instance.post("Book.json", {
    //         title: book.title,
    //         author: book.author,
    //         isbn: book.isbn,
    //         deleted  : (0),

    //       });
    //     }
    //     return Promise.resolve(); // Skip posting if already exists
    //   });

    //   try {
    //     await Promise.all(postPromises);
    //     console.log("Data posted successfully!");
    //     // Refresh data after posting
    //     await fetchData();
    //   } catch (error) {
    //     console.error("Error posting data:", error);
    //   }
    // };

    // handlePost();
  // Run when fetchedData changes

  
  
  const handleRemove = async (id) => {
    try {
      
      await instance.delete(`/Book/${id}.json`);
      setFetchedData(prevData => prevData.filter(book => book.id !== id));

    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

    



  const handleUpdate = async (bookId) => {
    try {
      const bookToUpdate = fetchedData.find(book => book.id === bookId);
  
      if (bookToUpdate) {
        const newTitle = prompt("Enter new Title", bookToUpdate.title);
        
        setFetchedData(prevData =>
          prevData.map(book =>
            book.id === bookId ? { ...book, title: newTitle } : book
          )
        );
  
        await instance.put(`Book/${bookId}.json`, {
          title: newTitle,
        });
  
        console.log(newTitle);
      } else {
        console.error("Book not found");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  




  const softDelete = async (bookId) => {
    try {
      const bookToUpdate = fetchedData.find(book => book.id === bookId);
  
      if (bookToUpdate) {
        await instance.patch(`Book/${bookId}.json`, {
          deleted: 1,
        });
      } else {
        console.error("Book not found");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  
  return (
    <div className="flex justify-center items-center">
      {fetchedData.some(element => element.deleted === 0) ? (
        <ResultList
          results={fetchedData.filter(element => element.deleted === 0)}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
          softDelete={softDelete}
        />
      ) : (
        null
      )}
    </div>
  );
  }
  
  export default ResultAdd;
  