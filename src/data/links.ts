/**
 * Configuração central do menu do handheld (linktree da MI6 para a bio do Insta).
 *
 * Para DESBLOQUEAR uma opção "em breve": mude `locked: true` para `false` e
 * preencha `url`. É o único arquivo a editar para publicar um novo link.
 */

export interface MenuLink {
  /** Identificador estável (usado em data-atributos e analytics). */
  id: string;
  /** Texto curto exibido no menu (cabe na "telinha"). */
  label: string;
  /** Linha de apoio opcional. */
  sublabel?: string;
  /** Destino do link. `null` quando ainda não há para onde ir. */
  url: string | null;
  /** Quando `true`, a opção aparece bloqueada (🔒 "em breve") e não é clicável. */
  locked: boolean;
}

export const links: MenuLink[] = [
  {
    id: 'site',
    label: 'Acesse nosso site',
    sublabel: 'Conheça a MI6',
    url: 'https://mi6consorcio.com.br',
    locked: false,
  },
  {
    id: 'simular',
    label: 'Simule agora',
    sublabel: 'Veja o valor da parcela',
    url: 'https://mi6consorcio.com.br/#contato',
    locked: false,
  },
  {
    id: 'franqueado',
    label: 'Seja um Franqueado MI6',
    sublabel: 'Em breve',
    url: null,
    locked: true,
  },
];

/** Redes sociais exibidas como ícones no rodapé. */
export interface Social {
  /** Identificador usado para escolher o ícone. */
  id: 'linkedin';
  label: string;
  url: string;
}

export const socials: Social[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn da MI6',
    url: 'https://www.linkedin.com/company/110370080/',
  },
];

/** Crédito no rodapé: texto clicável que leva ao perfil do desenvolvedor. */
export const credit = {
  label: 'Desenvolvido por marciliolemos.dev',
  url: 'https://instagram.com/marciliolemos.dev',
};
