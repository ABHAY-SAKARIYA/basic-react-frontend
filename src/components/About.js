import React from 'react'

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about_title">
          ABOUT 
        </div>
        <div className="contain">
          <div className="about_Data">
            <div className="about_left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam accusamus saepe eaque alias voluptates porro at ipsum blanditiis minima sed, doloribus quae reiciendis commodi laboriosam distinctio tempora illum fuga!
              Sequi, ea quisquam impedit nisi officiis iste officia cum sapiente dicta quibusdam corrupti tempore voluptate eius consequatur. Fugit provident aspernatur unde eius, iste molestiae placeat sapiente quos facilis magnam vero.
              Aut enim illum rerum quae perspiciatis? Consectetur cupiditate iure facere laborum est quis quibusdam alias, quas nesciunt assumenda amet molestias ipsam recusandae exercitationem ab sit delectus, obcaecati praesentium tenetur in?
              Pariatur eum nobis temporibus nemo adipisci iste totam sed quos error ullam et autem enim qui quod accusantium libero hic ex, reprehenderit deleniti maxime dolore in ea. Voluptate, perspiciatis sequi.
              Consequatur dolorum commodi repellendus ex earum. Quia quibusdam in, aut distinctio tempora, facere at assumenda libero nobis numquam officiis magni officia perspiciatis corporis neque doloremque blanditiis pariatur? Inventore, numquam soluta.
              Dolorum adipisci officiis odio repellat commodi libero vel voluptates porro explicabo ab! Ad quisquam nostrum, quibusdam unde, nobis explicabo, dolorem culpa impedit perspiciatis quos atque? Consequatur pariatur quod sunt harum!
              Expedita dolorem possimus officiis veniam commodi quo nesciunt sint nulla a, quae saepe in rerum dicta voluptatibus praesentium inventore! Voluptas harum voluptatum pariatur provident eaque quisquam veniam dolor similique fugiat?</div>
            <div className="about_right">
              <form>
                <div className="text-dark contact_title">Contact Us</div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Message</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
