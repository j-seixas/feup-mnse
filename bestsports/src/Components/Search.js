import React, { Component } from 'react'
import Suggestions from './Suggestions'

const news = [
  {
    title: "Magic escape with the win in Game 1",
    content: "Magic escape with the win in Game 1",
    route: "/basketballnews"
  },
  {
    title: "Magic escape with the win in Game 1",
    content: "For the Orlando Magic, the first game of the playoffs felt a lot like the final few weeks of the regular season: high stakes, small margins, and a big win at the end of the day. \
                                    D.J. Augustin scored 25 points, including the tiebreaking 3-pointer with 3.5 seconds left, and the Magic beat the Toronto Raptors 104-101 in Game 1 of their Eastern Conference first-round series on Saturday. \
                                    Kawhi Leonard got a final shot for Toronto, but missed the rim with his 3-pointer from the top.",
    route: "/basketballnews"
  },
  {
    title: "Magic escape with the win in Game 1",
    content: "Orlando went 22-9 over the final 31 games of the season to clinch its first playoff berth since 2012. “I think it helps,” Magic coach Steve Clifford said of his team’s tough regular-season finish.\
“We’ve been playing games that we had to win and were meaningful games for a while.” Nikola Vucevic, who scored 11 points, said Orlando’s stretch drive helped the team’s mental preparation for the grind of the postseason. \
“Throughout this last month, we were able to fight through a lot of different adversity and it has kind of prepared us for the playoffs,” Vucevic said.And, when crunch time arrived in Game 1, Orlando was entirely unfazed.“We made a bunch of big plays in the last three or four minutes,” \
 Clifford said.",
    route: "/basketballnews"
  },
  {
    title: "Magic escape with the win in Game 1",
    content: "Aaron Gordon had 10 points and 10 rebounds, Evan Fournier   \
 scored 16 points and Jonathan Isaac had 11 as the No. 7-seeded Magic became the latest team to beat Toronto  in the opening game \
  of a playoff series. The Raptors are 2-14 in playoff openers.“We know who we are and this is one game,” Toronto’s Kyle \
  Lowry said. “We’ve got to make sure we know who we are and execute what we can do. When we do what we are supposed to do,\
   we are really, really good.”Leonard scored 25 points, Pascal Siakam had 24 and Fred VanVleet had 14 for the second-seeded Raptors,\
    who reclaimed the lead after trailing by 16 points in the second quarter, but couldn’t hold on down the stretch.Toronto got 13 points \
    apiece from Danny Green and Marc Gasol, but Lowry finished scoreless, missing all seven of his attempts. Lowry did have eight assists \
    and seven rebounds.",
    route: "/basketballnews"
  },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" },
  { title: "", content: "", route: "" }
]

class Search extends Component {

  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    /*axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
    })*/
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

