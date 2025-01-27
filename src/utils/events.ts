declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string) => void;
  }
}

type Payload = {
  trade: string;
  finance: string;
  insight: string;
  id: number;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbyNsI2FB5z5-0DFs2bH1gXfSaolHQzO1uDpg8SI7r9q32XSoN3IXeMjaDLJWFGZmI0x/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'variant1' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
