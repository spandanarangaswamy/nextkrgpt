"use client";
import { openAISettingsAtom } from "@/atoms/chat";
import { useAtom } from "jotai";
import { focusAtom } from "jotai-optics";
import { Info } from "lucide-react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TextareaDefault } from "../ui/textarea-default";
const focusedModelAtom = focusAtom(openAISettingsAtom, (optic) =>
  optic.prop("model")
);
const focusedSystemPropmtAtom = focusAtom(openAISettingsAtom, (optic) =>
  optic.prop("system_prompt")
);

const focusedHistoryTypeAtom = focusAtom(openAISettingsAtom, (optic) =>
  optic.prop("history_type")
);

const NewChat = () => {
  const [model, setModel] = useAtom(focusedModelAtom);
  const [systemPropmt, setSystemPropmt] = useAtom(focusedSystemPropmtAtom);
  const [historyType, setHistoryType] = useAtom(focusedHistoryTypeAtom);

  return (
    <div className="flex items-start justify-center flex-1 w-full h-full sm:items-center">
      <div className="w-full max-h-full px-8 py-10 mx-8 rounded-md shadow-sm md:max-w-xl dark:bg-neutral-950/30 bg-white/50">
        <h2 className="text-lg font-medium">Start a New Chat</h2>
      </div>
    </div>
  );
};

export default NewChat;
