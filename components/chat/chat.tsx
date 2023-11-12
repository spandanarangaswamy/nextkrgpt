import { mobileMenuAtom } from "@/atoms/navigation";
import { ChatWithMessageCountAndSettings } from "@/types/collections";
import { titleCase } from "@/utils/helpers";
import { useSetAtom } from "jotai";
import { MessageCircle, MessageSquare } from "lucide-react";
import { DateTime } from "luxon";
import Link from "next/link";

const Chat = ({ chat }: { chat: ChatWithMessageCountAndSettings }) => {
  const showMobileMenu = useSetAtom(mobileMenuAtom);
  return (
    <Link
      onClick={() => {
        showMobileMenu(false);
      }}
      title={chat.title as string}
      href={`/chat/${chat.id}`}
    >
      <div className="flex items-center w-full gap-2 px-3 py-2 transition-colors duration-100 ease-in-out rounded-md bg-search text-white hover:bg-gptc3 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        <MessageSquare className="shrink-0" size="16" />
        <div className="text-sm leading-loose line-clamp-1">{chat.title}</div>
      </div>
    </Link>
  );
};

export default Chat;
