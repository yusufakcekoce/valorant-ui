import axios from "axios";

export function getMaps() {
  return axios.get("https://valorant-api.com/v1/maps");
}

export function getAgents() {
  return axios.get(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
}
