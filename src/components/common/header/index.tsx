import { createClient, getLocales } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import Bounded from "../containers/bounded";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search } from "lucide-react";
import IconsSocial from "./icons";
import { isFilled } from "@prismicio/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PrismicRichText } from "@prismicio/react";
import Paragraph from "../typography/paragraph";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { shortLocaleToLong } from "@/i18n/routing";

const SiteHeader = async ({ locale }: { locale: string }) => {
  const client = createClient();
  const settings = await client.getSingle("settings", {
    lang: shortLocaleToLong(locale),
  });

  const navigations = await Promise.all(
    settings.data.navigations.map((item) => {
      if (
        isFilled.contentRelationship(item.navigation_item) &&
        item.navigation_item.uid
      ) {
        return client.getByUID("navigation", item.navigation_item.uid, {
          lang: shortLocaleToLong(locale),
        });
      }
    })
  );

  const navigationItems = await Promise.all(
    navigations.map((nav, index) => {
      const hasChilds = nav && nav?.data.child_link.length > 0;

      if (hasChilds)
        return (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-[15px] font-medium rounded-[8px] p-0 hover:bg-transparent"
              >
                {nav.data.name}
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              className="rounded-[8px] bg-white/10 backdrop-blur-lg border-none text-white"
            >
              {nav.data.child_link.map(
                (item, idx) =>
                  item && (
                    <DropdownMenuItem
                      key={idx}
                      className="rounded-[8px] backdrop-blur-none bg-transparent hover:bg-white/20 hover:backdrop-blur-lg  transition-all duration-100"
                    >
                      <PrismicNextLink field={item.link_href}>
                        {item.link_name}
                      </PrismicNextLink>
                    </DropdownMenuItem>
                  )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );

      return (
        <PrismicNextLink
          field={nav?.data.link}
          key={index}
          className="text-[15px] font-medium"
        >
          {nav?.data.name}
        </PrismicNextLink>
      );
    })
  );

  const socialItems = settings.data.socicals.map((social, index) => (
    <IconsSocial key={index} type={social} />
  ));
  return (
    <Bounded
      as="header"
      className="flex items-center justify-between py-4 md:py-5"
    >
      <div className="flex items-center gap-16">
        <Link href="/">
          <PrismicNextImage field={settings.data.logo} />
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {navigationItems}
        </nav>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Button variant="ghost" size="icon">
          <Search className="size-4" />
        </Button>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-4">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                  <Link href="/">
                    <PrismicNextImage field={settings.data.logo} />
                  </Link>
                </SheetHeader>
                <nav className="mt-6 flex flex-col items-start gap-2">
                  {navigations.map((nav, index) => {
                    const hasChilds = nav && nav?.data.child_link.length > 0;
                    if (hasChilds) {
                      return (
                        <Collapsible
                          key={index}
                          className="w-full transition-all duration-300"
                        >
                          <CollapsibleTrigger asChild className="w-full">
                            <Button
                              variant="ghost"
                              className="text-[15px] font-medium hover:text-[#00359E] transition-all duration-300 hover:bg-gray-100 rounded-[8px] justify-between w-full py-2.5 px-2  [&[data-state=open]>svg]:rotate-180 [data-state=open]:text-[#00359E]"
                            >
                              {nav?.data.name}
                              <ChevronDown className="size-4 transition-transform duration-300" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="flex flex-col gap-2 pl-6 animate-fade-down duration-300">
                              {nav?.data.child_link.map((item, idx) => (
                                <SheetClose asChild key={idx}>
                                  <PrismicNextLink
                                    key={idx}
                                    // locale={locale}
                                    field={item.link_href}
                                    className="text-[15px] font-medium hover:text-[#00359E] transition-colors duration-300 hover:bg-gray-100 rounded-[8px] w-full py-2.5 px-2"
                                  >
                                    {item.link_name}
                                  </PrismicNextLink>
                                </SheetClose>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    }
                    return (
                      <SheetClose asChild key={index}>
                        <PrismicNextLink
                          field={nav?.data.link}
                          key={index}
                        //   locale={locale}
                          className="text-[15px] font-medium hover:text-[#00359E] transition-colors duration-300 hover:bg-gray-100 rounded-[8px] w-full py-2.5 px-2"
                        >
                          {nav?.data.name}
                        </PrismicNextLink>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
              <SheetFooter>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">{socialItems}</div>
                    <PrismicRichText
                      field={settings.data.copyright_text}
                      components={{
                        paragraph: ({ children }) => (
                          <Paragraph className="text-[13px] md:text-base text-[#6D6D6D]">
                            {children}
                          </Paragraph>
                        ),
                      }}
                    />
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex items-center gap-3">{socialItems}</div>
      </div>
    </Bounded>
  );
};


export default SiteHeader;
