import style from "./Proyectos.module.css";
import ProyectCard from "../ProyectCard/ProyectCard";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import supabase from "../../supabase/client";

interface ProyectCardProps {
  img: string;
  title: string;
  gitHub: string;
  webLink?: string | undefined;
  id: number;
}
export default function Proyectos() {
  const navigate = useNavigate();
  const [vs, setVs] = useState(false);
  const [cards, setCards] = useState<ProyectCardProps[]>([]);

  useEffect(() => {
    getProject();
  }, []);

  async function getProject(): Promise<ProyectCardProps[] | null> {
    const { data, error } = await supabase.from("proyects").select();
    if (error) {
      console.log(error);
    } else {
      setCards(data);
    }
    return data;
  }
  const handleClick = (link: string) => {
    document.documentElement.scrollTop = 0;
    setVs(true);
    setTimeout(() => {
      navigate(link);
    }, 600);
  };
  return (
    <section className={vs ? style.containerV : style.container}>
      <h1 className={style.title}>Proyectos Realizados</h1>
      <article className={style.card_container}>
        {cards.map((card) => (
          <ProyectCard
            key={card.id}
            img={card.img}
            title={card.title}
            gitHub={card.gitHub}
          />
        ))}
      </article>
      <article className={style.locator}>
        <button className={style.button} onClick={() => handleClick("/")}>
          Volver
        </button>
        <button
          className={style.button}
          onClick={() => handleClick("/habilidades")}
        >
          Mis Habilidades
        </button>
      </article>
    </section>
  );
}
