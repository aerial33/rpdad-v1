"use client"

import { useState } from "react"

import { megaNavItems } from "@/data/nav-items"
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/layout/header/navbar/navbar-mega/animated-navbar"
import { cn } from "@/lib/utils"

export function NavbarMega({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={cn("z-50 mx-auto", className)}>
      <Menu setActive={setActive}>
        {megaNavItems.map((item) => {
          // Si c'est un lien simple sans sous-menu
          if (item.link) {
            return (
              <HoveredLink
                key={item.id}
                link={item.link}
                onMouseEnter={() => setActive(null)}
              >
                {item.label}
              </HoveredLink>
            )
          }

          // Si c'est un élément avec sous-menus
          return (
            <MenuItem
              key={item.id}
              setActive={setActive}
              active={active}
              item={item.label}
            >
              <div className="grid grid-cols-2 gap-10 p-4">
                {item.subMenus?.map((subMenu) => (
                  <div key={subMenu.title} className="space-y-4">
                    <h3 className="text-sm font-medium text-neutral-500">
                      {subMenu.title}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {subMenu.items.map((subItem, idx) =>
                        "src" in subItem ? (
                          <ProductItem
                            key={idx}
                            title={subItem.label}
                            description={subItem.description}
                            href={subItem.href || "#"}
                            src={subItem.src}
                          />
                        ) : (
                          <HoveredLink key={idx} link={subItem.href || "#"}>
                            {subItem.label}
                          </HoveredLink>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
