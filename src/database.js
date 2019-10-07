export const createAccountInDb =
    db.collection('socialMedia').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())

        });

    })
