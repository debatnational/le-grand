import * as React from "react";
import { nextAnswer } from "./AnswerKitty";
import { Debate } from "./Debate";

export class KittyFirstDebate extends React.Component {
  state = {
    nextSugg: "",
    debate: []
  };

  addSuggestion() {
    let sugg = this.state.nextSugg;
    if (!sugg) {
      sugg =
        "Comme tous les Français, je suis une sale feignasse pas fichue d'entrer du texte.";
    }

    this.setState({
      debate: [
        ...this.state.debate,
        { author: "Toi", text: sugg },
        { author: "Mr. le Président", text: nextAnswer(this.state.nextSugg) }
      ],
      nextSugg: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Allez, on débat maintenant</h3>
        <Debate debate={this.state.debate} />
        <div>
          <textarea
            value={this.state.nextSugg}
            onChange={e => this.setState({ nextSugg: e.target.value })}
            placeholder={`
Alors je vais t'expliquer lentement pour que tu comprennes bien. Tu entres ton message ici. Puis tu cliques sur "envoyer". Et ensuite je décide de ce qu'on fait.

Allez vas-y maintenant.

Allez ! T'attends quoi, un passage piéton ?
        `}
          />
          <div className="send">
            <button onClick={() => this.addSuggestion()} className="right">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    );
  }
}
