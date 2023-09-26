class CircleProgress{
  _name: string
  _fill_color = "red"
  _track_color = "#fff"

  constructor(id: string, fill_color?: string | null, track_color?: string | null){
    this._name = id

    if(fill_color){ this._fill_color = fill_color }
    if(track_color){ this._track_color = track_color }
  }

  /**
   * returns root element.
   */
  get el(){
    return document.querySelector(this._name) as HTMLDivElement
  }

  get value(){
    return this.el.querySelector(".value") as HTMLDivElement
  }

  /**
   * update circle progress by n percent
   * @param percent can be from 0 to 100
   */
  update(percent: number){
    const percentage = percent * 3.6
    this.el.style.background = `conic-gradient(red ${percentage}deg, #fff 0deg)`
    this.value.textContent = percent.toString()
    return this
  }

  /** resets progress to 0 */
  reset(){
    this.update(0)
    return this
  }
}

export default CircleProgress
