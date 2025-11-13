import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Map, SlidersHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function MapPlaceholder() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'map-placeholder');
  return (
    <div className="relative w-full h-[400px] lg:h-full bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
      {mapImage && (
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-cover"
          data-ai-hint={mapImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
        <div className="text-center p-4 bg-background/80 rounded-xl backdrop-blur-sm">
          <Map className="w-12 h-12 mx-auto text-primary" />
          <p className="mt-2 font-semibold text-foreground">Mapa interactivo</p>
          <p className="text-sm text-muted-foreground">Los pisos aparecerán aquí</p>
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <div className="container py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Explorar Viviendas</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Encuentra el lugar perfecto para tu aventura en España.
        </p>
      </header>

      <Card className="p-4 mb-8 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Input placeholder="Ciudad, barrio..." />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de habitación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Habitación privada</SelectItem>
              <SelectItem value="shared">Habitación compartida</SelectItem>
              <SelectItem value="full">Piso completo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Precio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">&lt; 400€</SelectItem>
              <SelectItem value="2">400€ - 600€</SelectItem>
              <SelectItem value="3">&gt; 600€</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="lg:col-span-1">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Más filtros
          </Button>
          <Button className="lg:col-span-1">Buscar</Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:h-[calc(100vh-20rem)] lg:overflow-y-auto pr-4 -mr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
                 {properties.map((property) => (
                    <PropertyCard key={`${property.id}-clone`} property={{...property, id: `${property.id}-clone`}} />
                ))}
            </div>
        </div>
        <div className="hidden lg:block sticky top-24 h-[calc(100vh-14rem)]">
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}