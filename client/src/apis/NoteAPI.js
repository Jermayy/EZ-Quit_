// const notes = [
//     {
//     "id":1,
//     "date":"12/12/2020",
//     "time":"12:24pm",
//     "smoke":"4",
//     "note":"Almost at the end of the day, still craving"
//     },
//     {
//     "id":2,
//     "date":"13/12/2020",
//     "time":"1:30pm",
//     "smoke":"2",
//     "note":"Only had 2 today, very proud"
//     },
//     {
//     "id":3,
//     "date":"15/12/2020",
//     "time":"3:00pm",
//     "smoke":"1",
//     "note":"Managed to go almost 2 days without having one but work got stressful - just shows I am improving"
//     },
//     {
//     "id":4,
//     "date":"15/12/2020",
//     "time":"3:00pm",
//     "smoke":"1",
//     "note":"Managed to go almost 2 days without having one but work got stressful - just shows I am improving"
//     },
//     {
//     "id":5,
//     "date":"15/12/2020",
//     "time":"3:00pm",
//     "smoke":"1",
//     "note":"Managed to go almost 2 days without having one but work got stressful - just shows I am improving"
//     },
//     {
//     "id":6,
//     "date":"xx/xx/xxxx",
//     "time":"17:00pm",
//     "smoke":"400",
//     "note":"test app for api"
//     }]

    const notesJson = localStorage.getItem('notes');
    const notes = notesJson ? JSON.parse(notesJson) : [];


export const NoteAPI = {


   async getNotes() {
return [...notes]
    },

  async  addNote(note) {
notes.push(note)
localStorage.setItem('notes', JSON.stringify(notes))
    }
};

