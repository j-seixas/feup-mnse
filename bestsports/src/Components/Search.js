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
  {
    title: "Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'",
    content: "Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'",
    route: "/bballceltics"
  },
  {
    title: "Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'",
    content: "Boston Celtics star Kyrie Irving has continued to struggle from the field when his team needs him most in its second-round \
    playoff series against the Milwaukee Bucks, but that apparently won't stop him from seeking his \
    shot in Game 5. \"Who cares? I'm a basketball player,\" Irving said after shooting just 7-of-22 from the field Monday, per Tim Bontemps \
    of ESPN.com. \"Prepare the right way ... The expectations on me are going to be sky-high. ... For me, the\
     22 shots? I should've shot 30.",
    route: "/bballceltics"
  },
  {
    title: "Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'",
    content: "Milwaukee seized a 3-1 series lead with its 113-101 victory in Game 4. Since Boston won Game 1, Irving is an ugly 19-of-62 \
     (30.6 percent) from the field. Irving also left the court before the final buzzer, though he said \"the game was over,\" per Jay King \
     of The Athletic. The point guard wanted to be the go-to option and emerge from LeBron James' shadow when he asked the Cleveland Cavaliers \
     to trade him in 2017. This situation with the Celtics is exactly what he was looking for, as he is the unquestioned featured player for what \
     should be a title contender.",
    route: "/bballceltics"
  },
  {
    title: "Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'",
    content: "However, Giannis Antetokounmpo's star has shone brighter in this series and did so again Monday, when he tallied 39 points, \
    16 rebounds and four assists. He put his team on his back on the road as no other Buck scored more than 15 points and Khris Middleton shot \
    just 4-of-19 from the field. Boston didn't need Irving to be a one-man show like Antetokounmpo. Rather, even a solid shooting performance \
    from the 27-year-old likely would have been enough to tie the series considering each of Boston's other four starters scored 16 or more points. \
    (Irving finished with 23.)",
    route: "/bballceltics"
  },
  {
    title: "Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets",
    content: "Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets",
    route: "/bballphilly"
  },
  {
    title: "Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets",
    content: "The Philadelphia 76ers were thoroughly outplayed in Game 1, setting a potentially troubling tone for the first-round series. \
   Despite perceived matchup difficulties, the Philadelphia 76ers were heavy favorites against the Brooklyn Nets in Game 1.\
    Momentum seemed to be on Philadelphia’s side, especially after Joel Embiid was cleared to play. The Sixers are the superior team on paper.\
     It didn’t look that way on screen.",
    route: "/bballphilly"
  },
  {
    title: "Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets",
    content: "After Embiid forged an early lead at the free throw line, Brooklyn was constant in their pressure on both ends.\
     Ben Simmons and Tobias Harris no-showed, J.J. Redick was unceasingly exploited, and the bench did little to stem the tide.\
      The Nets didn’t even get a good D’Angelo Russell game until the second half.\
      Brooklyn’s defensive prowess, combined with a red-hot offensive attack, left the Sixers in unexpected disarray.\
      The defensive issues many anticipated were worse than expected. It’s not time to panic.\
      The Sixers are still favorites in the series and should come more prepared in Game 2.\
      If anything, it’s a much-needed wakeup call, reminding the Sixers that ‘talenting’ their way through the postseason requires serious effort given the squad’s work-in-progress chemistry.",
    route: "/bballphilly"
  },
  {
    title: "Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets",
    content: "Even so, the Sixers got a vintage Jimmy Butler performance and still struggled to keep pace with the sixth-seeded, inexperienced Nets.\
     It wasn’t the most encouraging loss. It was even less encouraging before Toronto and Denver proceeded to drop their Game 1s later in the evening.",
    route: "/bballphilly"
  },
  {
    title: "Houston Rockets win Game 4 vs. Warriors to tie series 2-2",
    content: "Houston Rockets win Game 4 vs. Warriors to tie series 2-2",
    route: "/bballhouston"
  },
  {
    title: "Houston Rockets win Game 4 vs. Warriors to tie series 2-2",
    content: "James Harden scored 38 points and the Houston Rockets held on for a 112-108 win over the Golden State Warriors on Monday night to even their Western Conference semifinals series at 2-2.\
     The Rockets were up by nine before the Golden State scored the next seven points, capped by a 3 from Stephen Curry, to get within 110-108 with 19 seconds left.\
      Harden made one of two free throws with 11.5 seconds left. Kevin Durant missed a 3 after that.\
       But the Warriors got the rebound and Curry also missed a 3-point attempt before Golden State was forced to foul Chris Paul.",
    route: "/bballhouston"
  },
  {
    title: "Houston Rockets win Game 4 vs. Warriors to tie series 2-2",
    content: "Houston made 17 of its 50 3-point attempts, while the Warriors shot just 8 of 33 from downtown with Curry making just 4 of his 14 attempts.\
     The Rockets were up by nine after three and used an 8-2 run, with four points from Harden, to open the fourth and extend the lead to 101-86.\
      Golden State used an 8-3 run, with six points from Draymond Green, to cut it to 104-94 midway through the quarter.",
    route: "/bballhouston"
  },
  {
    title: "Houston Rockets win Game 4 vs. Warriors to tie series 2-2",
    content: "Houston had a 10-point lead with about four minutes left before a 5-2 run, with a 3 from Curry, got them within 108-101.\
     Green was shaken up when Harden inadvertently knocked him in the head on the follow through after he made a 3-pointer that put Houston up 71-59 with nine minutes left in the third quarter.\
      Green fell to the court where he remained holding the left side of his head for a couple of minutes.\
       The Warriors called a timeout and he collected himself and remained in the game. The lead grew to 77-60 before Golden State got going.",
    route: "/bballhouston"
  },
  {
    title: "Cristiano Ronaldo claims first league title since moving to Italy",
    content: "Cristiano Ronaldo claims first league title since moving to Italy",
    route: "/footballnews"
  },
  {
    title: "Cristiano Ronaldo claims first league title since moving to Italy",
    content: "Juventus put the disappointment of a Champions League exit behind them as Massimiliano Allegri's side beat Fiorentina 2-1 to secure an eighth consecutive Serie A title.\
     Playing in front of an expectant home crowd, Allegri's players needed just a point to secure the title but went one better after Alex Sandro's strike was doubled thanks to an own goal by German Pezzella in the second half.\
      Having lost to minnows SPAL last time out, missing the chance to secure their latest league title, nerves kicked in early in Turin when Nikola Milenkovic scored the opening goal after six minutes.  ",
    route: "/footballnews"
  },
  {
    title: "Cristiano Ronaldo claims first league title since moving to Italy",
    content: "By claiming the Scudetto, Ronaldo became the first player in history to win Serie A, La Liga and the Premier League.\
     It is a record as the Old Lady's dominance sees them become the first side to go eight titles undefeated in Europe's top five leagues.\
      The disappointment of their European exit to Ajax at this ground back on Tuesday evening was, for 90 minutes at least, quickly forgotten as players, staff and supporters celebrated a piece of history.  ",
    route: "/footballnews"
  },
  {
    title: "Cristiano Ronaldo claims first league title since moving to Italy",
    content: "The five-time Ballon d'Or winner told DAZN: 'My future? I will be at Juventus next year 1000 per cent, I'm very happy for the Scudetto & the Super Cup.\
     'We have behaved well in the Champions League, next year it will be better.' \
     There were title celebrations earlier in the day for Juventus as the women's team, including England's Eniola Aluko, wrapped up their domestic title with victory over Verona.\
      Aluko got herself a goal as Juventus women ran out 3-0 winners on the day after earlier strikes from Petronella Ekroth and Cristiana Grielli ensured the whole club swept the board with titles. ",
    route: "/footballnews"
  },
  {
    title: "Manchester City retains Premier League title with win over Brighton",
    content: "Manchester City retains Premier League title with win over Brighton",
    route: "/footballcity"
  },
  {
    title: "Manchester City retains Premier League title with win over Brighton",
    content: "Despite going a goal down in the first half, Man City retained the title after defeating Brighton 4-1 at the Amex Stadium,\
     meaning Liverpool's victory against Wolves was in vain.\
      Sergio Aguero, Aymeric Laporte, Riyad Mahrez, and Ilkay Gundogan all scored for the visitors after Glenn Murray had given the home side the lead on 25 minutes.\
       It's the first time a team has won back-to-back titles since Sir Alex Ferguson's Manchester United in 2009, and City's total of 98 points is the second highest haul in Premier League history -- two shy of the 100 points Pep Guardiola's men accrued last year. ",
    route: "/footballcity"
  },
  {
    title: "Manchester City retains Premier League title with win over Brighton",
    content: "In a remarkable season, Man City went toe-to-toe with Liverpool as both sides refused to bow down in the season's closing stages.\
     City's campaign concluded on a run of 14 consecutive wins. It was against Newcastle on January 29 that the light blues last dropped points, some three-and-a-half months before lifting the title.\
      Liverpool's 97 points, meanwhile, would have been enough to take top spot in every Premier League season bar the two most recent.\
       \"I think it was the hardest and most satisfying,\" Man City captain Vincent Kompany told Sky Sports, reflecting on his three previous titles with the club.\
        \"Liverpool were exceptional. There didn't deserve to be a loser. But I'm so happy for the team. We've got an incredible desire.\"",
    route: "/footballcity"
  },
  {
    title: "Manchester City retains Premier League title with win over Brighton",
    content: "There was momentary panic for City when Murray headed in from a corner to give Brighton a shock lead,\
     but that was erased barely a minute later when Sergio Aguero slotted the ball through Mat Ryan's legs to draw level.\
      With Liverpool leading against Wolves, more goals were needed from the visitors.\
      Laporte headed home unmarked from a corner to give his side a 2-1 lead 10 minutes before halftime, putting City firmly in the driving seat.\
      Mahrez's right-footed strike on the edge of the area extended the lead midway through the second period, before Gundogan's sweetly-struck free-kick from 25 yards ultimately sealed the match -- and the title.\
      Following the trophy lift on England's south coast, the City team is flying straight back to Manchester to celebrate at its home ground.",
    route: "/footballcity"
  },
  {
    title: "Liverpool stun Barcelona to overcome deficit and reach UCL final",
    content: "Liverpool stun Barcelona to overcome deficit and reach UCL final",
    route: "/footballbarca"
  },
  {
    title: "Liverpool stun Barcelona to overcome deficit and reach UCL final",
    content: "Liverpool produced one of the greatest comebacks in Champions League history to beat Barcelona 4-0 on Tuesday,\
     overturning a three-goal first-leg deficit and advancing to their second successive final with a 4-3 aggregate victory.\
      Two goals each from stand-in forward Divock Origi and halftime substitute Georginio Wijnaldum left Lionel Messi and Barcelona utterly shell-shocked by a Liverpool performance full of passion, belief and determination.\
       Jurgen Klopp's side will play the winner of Wednesday's other semifinal between Ajax Amsterdam and Tottenham Hotspur,\
        with the Dutch side leading 1-0 from the first leg in London.",
    route: "/footballbarca"
  },
  {
    title: "Liverpool stun Barcelona to overcome deficit and reach UCL final",
    content: "\"Unbelievable. I don't think many people gave us a chance,\" Liverpool captain Jordan Henderson said.\
     \"Before the game we knew that it would be difficult but it was still possible, of course.\
      It's amazing. We knew that at Anfield we could do something special.\
      \" Liverpool become only the third team in the history of the European Cup or Champions League to come from three goals down after the first leg of a semifinal and progress after Panathinaikos in 1970-71 and Barcelona themselves in 1985-86.\
       For Barca, who went out on away goals to AS Roma in the quarterfinals last year after winning the first leg 4-1, it was a bitter night that will raise many questions for coach Ernesto Valverde.",
    route: "/footballbarca"
  },
  {
    title: "Liverpool stun Barcelona to overcome deficit and reach UCL final",
    content: "Liverpool grabbed an extraordinary fourth goal with a quickly taken corner from Alexander-Arnold,\
     catching the Barca defence asleep with a low ball that was turned in at the near post by Origi.\
      That sent Anfield wild, but then Klopp's side suddenly found themselves needing to switch mindset and defend a lead as Barca slipped, belatedly, into their trademark possession game.\
       Yet with Virgil Van Dijk and Joel Matip outstanding in the centre of defence and Brazilian Fabinho making some crucial interventions in midfield, Liverpool held on for one of their most famous wins.\
        Klopp's side, who lost to Real Madrid in last year's final in Kiev, remain in with a chance of a double triumph as they head into Sunday's final round of Premier League games trailing leaders Manchester City by just a point.",
    route: "/footballbarca"
  },
  {
    title: "Tottenham stuns Ajax to make Champions League final",
    content: "Tottenham stuns Ajax to make Champions League final",
    route: "/footballajax"
  },
  {
    title: "Tottenham stuns Ajax to make Champions League final",
    content: "Lucas Moura scored a dramatic last-minute winner to send Tottenham Hotspur into the Champions League final for the first time in its history after an astonishing comeback against Ajax in Amsterdam.\
     Trailing 2-0 at the interval and 3-0 overall, Moura scored three times in the second half, including a last-gasp winner,\
      to set up an all-English final against Liverpool in Madrid next month. \"It's impossible to explain what I'm feeling,\" Brazilian Moura told BT Sport after the game on Wednesday.\
       \"We gave everything on the pitch and deserved this moment -- we are family. \"Football is amazing, its gives us moments like this.\
        We cannot imagine. It's the best moment in my life, and in my career.\"",
    route: "/footballajax"
  },
  {
    title: "Tottenham stuns Ajax to make Champions League final",
    content: "On the 59 minute mark, Tottenham drew level on the night as Moura displayed fabulous skill to control the ball inside the penalty area before rifling the ball past Onana once again.\
     Shell-shocked, Ajax tried to respond. Both teams, by now clearly exhausted and drunk on emotion, poured forward in a frantic end to the contest.\
      Ziyech, who was hugely impressive throughout, went close for the home side hitting the post with a shot as Tottenham left space in behind in an attempt to find a winner.",
    route: "/footballajax"
  },
  {
    title: "Tottenham stuns Ajax to make Champions League final",
    content: "But that winner appeared to have escaped from its clutches when Jan Vertonghen could only send his header against the crossbar before having his subsequent effort blocked on the line.\
     When the fourth official signaled a minimum of five minutes of stoppage time to be play, Ajax's players appeared to collectively shrink by an inch.\
      Tottenham sensed its moment and once again it was Moura with the final meaningful kick of the contest, driving a stake through Ajax hearts by firing home from 16-yards.\
       Cue silence but for a few thousand souls from north London, drunk on delirium and no doubt a beer or two who must have had to pinch themselves to make sure it was real.",
    route: "/footballajax"
  }
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

