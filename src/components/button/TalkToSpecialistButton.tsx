import { Button } from ".";

export default function TalkToSpecialistButton() {
  const { WHATSAPP_URL = "" } = process.env;

  return (
    <Button href={WHATSAPP_URL} target="_blank">
      Falar com especialista
    </Button>
  );
}
