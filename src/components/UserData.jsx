import { useEffect } from "react";

export default function UserData(props) {
  const { avatar_url, login, name, followers, following, public_repos } = props.props;
  
  
  return <div className="card">
    <img src={avatar_url} alt='image' height={300}/>
    <a href={`https://github.com/${login}`}><h2>{name || login}</h2></a>
    <h3>Follwers = {followers}</h3>
    <h3>Following = {following}</h3>
    <h3>Repos = {public_repos}</h3>
  </div>;
}
