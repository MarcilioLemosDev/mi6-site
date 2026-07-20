/**
 * Atribuição de canal de entrada do lead, compartilhada entre a home, a unidade
 * Campinas e o simulador dedicado (antes duplicada em 3 lugares).
 *
 * Regra: utm_source > referrer. Capturado UMA vez por sessão (na primeira
 * chamada, idealmente no carregamento, antes de navegação interna apagar o
 * referrer externo) e guardado em sessionStorage. Best-effort: nunca lança.
 */
export function canalEntrada(): string {
  try {
    const salvo = sessionStorage.getItem('mi6-canal');
    if (salvo) return salvo;
    const utm = new URLSearchParams(location.search).get('utm_source');
    const ref = document.referrer ? new URL(document.referrer).hostname : '';
    const canal = utm
      ? utm.toLowerCase().slice(0, 12)
      : !ref || ref.endsWith('mi6consorcio.com.br')
        ? 'direto'
        : ref.includes('google.')
          ? 'google'
          : ref.includes('instagram')
            ? 'instagram'
            : ref.includes('bing.')
              ? 'bing'
              : 'outro';
    sessionStorage.setItem('mi6-canal', canal);
    return canal;
  } catch {
    return 'direto';
  }
}
