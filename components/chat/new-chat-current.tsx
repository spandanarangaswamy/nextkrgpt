"use client";
import { currentChatAtom, defaultSystemPropmt } from "@/atoms/chat";
import { useSupabase } from "@/lib/supabase/supabase-provider";
import { useAtom } from "jotai";
import debounce from "lodash.debounce";
import { Info } from "lucide-react";
import { useCallback, useMemo } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TextareaDefault } from "../ui/textarea-default";

const NewChatCurrent = () => {
  const [currentChat, setCurrentChat] = useAtom(currentChatAtom);
  const { supabase } = useSupabase();

  // Send system prompt to supabase
  const sendSupabase = useCallback(
    async (value: string, id: string) => {
      await supabase
        .from("chats")
        .update({
          system_prompt: value,
        })
        .eq("id", id);
    },
    [supabase]
  );

  // Reset System Input to default
  const resetSystemInput = useCallback(async () => {
    setCurrentChat((prev) =>
      prev
        ? {
            ...prev,
            system_prompt: defaultSystemPropmt,
          }
        : prev
    );
    await sendSupabase(defaultSystemPropmt, currentChat?.id as string);
  }, [currentChat?.id, sendSupabase, setCurrentChat]);

  // Debounce the supabase call
  const debouncedSendSupabase = useMemo(
    () => debounce(sendSupabase, 1000),
    [sendSupabase]
  );

  return (
    <div className="flex items-start justify-center flex-1 w-full h-full sm:items-center">
      {/* Container */}
      <div className="w-full max-h-full px-8 py-10 mx-8 rounded-md shadow-sm md:max-w-xl dark:bg-neutral-950/30 bg-white/50">
        <h2 className="text-lg font-medium">Start a New Chat</h2>
      </div>
    </div>
  );
};

export default NewChatCurrent;
