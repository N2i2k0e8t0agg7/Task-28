import Page from "./Component/Page"
import img from "./assets/img.jpg"

function App() {

    const data = [
      { id: 1, name: "Aurora UI", desc: "Modern glowing interface.", img: img },
      { id: 3, name: "Music Wave", desc: "Animated music player card .", img: img },
      { id: 4, name: "Travel Explorer", desc: "Clean travel card showcatifully.", img: img },
      { id: 7, name: "Movie Stream", desc: "Cinema inspired cstreaming platforms.", img: img },
      { id: 10, name: "Code Studio", desc: "Developer focusedaesthetics.", img: img },
    ]

  return (
    <div className="bg-black min-h-screen">
      <Page Prop={data}/>
      {/* <Page/> */}
    </div>
  )
}

export default App

