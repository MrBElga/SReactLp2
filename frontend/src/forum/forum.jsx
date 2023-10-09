import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import Pagina from "../templates/Pagina";
import "./forum.css";


const users = [
  {
    username: "Kirito",
    message: "Acabei de derrotar um chefe!",
    level: 50,
    abilities: ["Espada Dupla", "Agilidade", "Teletransporte"],
    date: "2023-10-15",
    topic: "Batalhas de Chefes",
    avatar: "url_da_foto_do_usuario1.jpg",
  },
  {
    username: "Asuna",
    message: "Qual é o próximo andar?",
    level: 48,
    abilities: ["Rapidez", "Esgrima", "Cura"],
    date: "2023-10-14",
    topic: "Exploração de Andares",
    avatar: "url_da_foto_do_usuario2.jpg",
  },
  {
    username: "Klein",
    message: "Alguém quer fazer uma festa?",
    level: 42,
    abilities: ["Luta com Lança", "Cozinha", "Companheirismo"],
    date: "2023-10-13",
    topic: "Confraternização de Jogadores",
    avatar: "url_da_foto_do_usuario3.jpg",
  },
  {
    username: "Leafa",
    message: "Estou explorando uma nova área!",
    level: 45,
    abilities: ["Magia de Voo", "Agilidade", "Arco e Flecha"],
    date: "2023-10-12",
    topic: "Novas Descobertas",
    avatar: "url_da_foto_do_usuario4.jpg",
  },
  {
    username: "Silica",
    message: "Meu dragão de estimação está crescendo!",
    level: 38,
    abilities: ["Domar Monstros", "Magia Elemental", "Cura"],
    date: "2023-10-11",
    topic: "Criando Companheiros",
    avatar: "url_da_foto_do_usuario5.jpg",
  },
  {
    username: "Agil",
    message: "Tenho equipamentos raros para venda!",
    level: 47,
    abilities: ["Força", "Negociação", "Arremesso de Martelo"],
    date: "2023-10-10",
    topic: "Mercado de Itens",
    avatar: "url_da_foto_do_usuario6.jpg",
  },
  {
    username: "Yui",
    message: "Papai e mamãe são incríveis!",
    level: 5,
    abilities: ["Interface de Usuário", "Aprendizado Rápido", "Apoio Emocional"],
    date: "2023-10-09",
    topic: "Família SAO",
    avatar: "url_da_foto_do_usuario7.jpg",
  },
  {
    username: "Sinon",
    message: "Treinando minha mira no arco!",
    level: 44,
    abilities: ["Tiro Preciso", "Agilidade", "Camuflagem"],
    date: "2023-10-08",
    topic: "Arquearia Virtual",
    avatar: "url_da_foto_do_usuario8.jpg",
  },
  {
    username: "Eugeo",
    message: "Vou me tornar o espadachim mais forte!",
    level: 40,
    abilities: ["Espada Gigante", "Força", "Lealdade"],
    date: "2023-10-07",
    topic: "Caminho do Espadachim",
    avatar: "url_da_foto_do_usuario9.jpg",
  },
  {
    username: "Alice",
    message: "Lutando pela justiça em Underworld!",
    level: 55,
    abilities: ["Espada Divina", "Determinação", "Liderança"],
    date: "2023-10-06",
    topic: "Defensora de Underworld",
    avatar: "url_da_foto_do_usuario10.jpg",
  },

];

  
const ForumPage = () => {
    return (
      <Pagina>
        <Container className="forum-container">
          <Typography variant="h4" className="forum-title">
            Fórum de Sword Art Online
          </Typography>
          <div className="forum-content">
            <div className="forum-card-container">
              {users.map((user, index) => (
                <Card key={index} className="forum-card">
                  <CardContent>
                    <div className="forum-user-info">
                      <Avatar src={user.avatar} alt={user.username} />
                      <div className="forum-user-details">
                        <Typography variant="h6" className="forum-username">
                          {user.username}
                        </Typography>
                        <Typography variant="body2" className="forum-user-level">
                          Nível {user.level}
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="body2" className="forum-message">
                      {user.message}
                    </Typography>
                    <div className="forum-user-abilities">
                      {user.abilities.map((ability, abilityIndex) => (
                        <IconButton
                          key={abilityIndex}
                          className="forum-ability-icon"
                          aria-label={ability}
                        >
                        
                        </IconButton>
                      ))}
                    </div>
                    
                    <Typography variant="body2" className="forum-post-date">
                      Publicado em {user.date}
                    </Typography>
                    <Typography variant="body2" className="forum-topic">
                      Tópico: {user.topic}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Pagina>
    );
  };
  
  export default ForumPage;