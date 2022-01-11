import React from 'react'

function Gallery() {
    var data = ["https://images.unsplash.com/photo-1548164806-9709e698bfc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80", "https://images.unsplash.com/photo-1548003411-73cb4c666bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80", "https://images.unsplash.com/photo-1548133650-7e2b96ebe5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80", "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", "https://images.unsplash.com/photo-1548318281-7da3085ce691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80", "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80", "https://images.unsplash.com/photo-1548003411-73cb4c666bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"]
    return (
        <div>
            <h3>Gallery</h3>
            <div class="row">
                {data.map((e) => {
                    return (
                        // <div class="col-sm-4"><img src={e} className="w-50 h-50"></img></div>
                        <div className="card col-sm-4">
                            <img src={e} className="card-img-top" alt="card-img-top" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
